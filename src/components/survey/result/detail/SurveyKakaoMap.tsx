import {KAKAO_API_KEY} from '@env';
import {tw} from '@src/shared/lib/utils';
import {Plan} from '@src/entities/plan';
import React, {useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {SurveyPlaceItem} from './SurveyPlaceItem';
import {SurveyDayList} from './SurveyDayList';
import {useKakaoNavi} from '@src/shared/lib/hooks';
import {SavePlan} from '@src/features/savePlan';

interface SurveyKakaoMapProps {
  index: number;
  plan: Plan;
}

export const SurveyKakaoMap = ({index, plan}: SurveyKakaoMapProps) => {
  const [day, setDay] = useState(0);
  const webViewRef = useRef<WebView>(null);
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing"></script> 
    </head>
    <body>
      <div id="map" style="width: 100%; height: 192px" />
      <script type="text/javascript">
        (function () {
          // id가 "map"인 요소에 지도를 생성
          const container = document.getElementById('map');
          const options = { 
            // 지도 좌표값 설정
            center: new kakao.maps.LatLng(${plan.days[day][0].latitude}, ${plan.days[day][0].longitude}),

            // 줌 레벨을 5으로 설정
            level: 5,
          };                
            
          const map = new kakao.maps.Map(container, options);
          const positions = ${JSON.stringify(plan.days[day])}.map((position) => new kakao.maps.LatLng(position.latitude, position.longitude));
          
          // 커스텀 오버레이 생성
          const overlays = positions.map((position, index) => new kakao.maps.CustomOverlay({
            position: position,
            content: '<p style="width: 1.5rem; height: 1.5rem; background-color: #5350fe; color: white; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; font-size: 0.875rem;">' + (index + 1) + '</p>',
          }));
          
          // 지도에 커스텀 오버레이를 표시
          overlays.forEach((overlay) => {
            overlay.setMap(map);
          });

          // 지도에 표시할 선을 생성
          const polyline = new kakao.maps.Polyline({
            path: positions, // 선을 구성하는 좌표 배열
            strokeWeight: 3, // 선의 두께
            strokeColor: "#5350fe", // 선의 색깔
            strokeOpacity: 1, // 선의 불투명도
            strokeStyle: "solid", // 선의 스타일
          });

          // 지도에 선을 표시
          polyline.setMap(map);

          // iOS
          window.addEventListener("message", (e) => {
            const data = JSON.parse(e.data);
            map.panTo(new kakao.maps.LatLng(Number(data.latitude), Number(data.longitude)));
          });

          // Android
          document.addEventListener("message", (e) => {
            const data = JSON.parse(e.data);
            map.panTo(new kakao.maps.LatLng(Number(data.latitude), Number(data.longitude)));
          });
        })();
      </script>       
    </body>
  </html>`;

  const {kakaoNaviInfo, isLoading} = useKakaoNavi(
    plan.id,
    day,
    [plan.days[day][0].longitude, plan.days[day][0].latitude],
    [plan.days[day][5].longitude, plan.days[day][5].latitude],
    plan.days[day].slice(1, 5).map(value => [value.longitude, value.latitude]),
  );

  const handlePanTo = (latitude: number, longitude: number) => {
    webViewRef.current?.postMessage(JSON.stringify({latitude, longitude}));
  };

  return (
    <View style={tw`h-full`}>
      <View style={tw`h-48`}>
        <WebView ref={webViewRef} source={{html: html}} />
      </View>
      <ScrollView style={tw`mt-4 px-4`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text
            style={tw`h-6 w-6 rounded-full border border-custom-blue text-center font-semibold text-custom-blue`}>
            {index}
          </Text>
          <Text style={tw`text-xl font-semibold text-custom-01`}>
            {plan.title}
          </Text>
        </View>
        <SurveyDayList
          currentDay={day}
          totalDays={plan.days.length}
          setDay={(value: number) => setDay(value)}
        />
        {plan.days[day].map((item, idx) => (
          <SurveyPlaceItem
            key={item.id}
            index={idx}
            item={item}
            distance={kakaoNaviInfo?.sections[idx]?.distance}
            duration={kakaoNaviInfo?.sections[idx]?.duration}
            isLoading={idx === 5 ? false : isLoading}
            onPress={handlePanTo}
          />
        ))}
      </ScrollView>
      <SavePlan planId={plan.id} />
    </View>
  );
};
