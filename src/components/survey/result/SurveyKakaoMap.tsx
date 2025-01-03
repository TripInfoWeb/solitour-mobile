import {KAKAO_API_KEY} from '@env';
import React from 'react';
import WebView from 'react-native-webview';

interface SurveyKakaoMapProps {
  positionList: {latitude: number; longitude: number}[];
}

export const SurveyKakaoMap = ({positionList}: SurveyKakaoMapProps) => {
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
            center: new kakao.maps.LatLng(${positionList[0].latitude}, ${positionList[0].longitude}),

            // 줌 레벨을 9으로 설정
            level: 9,
          };                
            
          const map = new kakao.maps.Map(container, options);
          const positions = ${JSON.stringify(positionList)}.map((position) => new kakao.maps.LatLng(position.latitude, position.longitude));
          
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
        })();
      </script>       
    </body>
  </html>`;

  return <WebView source={{html: html}} />;
};
