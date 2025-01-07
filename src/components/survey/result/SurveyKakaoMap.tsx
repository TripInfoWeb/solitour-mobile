import {KAKAO_API_KEY} from '@env';
import React from 'react';
import WebView from 'react-native-webview';

interface SurveyKakaoMapProps {
  initialLatitude: number;
  initialLongitude: number;
}

export const SurveyKakaoMap = ({
  initialLatitude,
  initialLongitude,
}: SurveyKakaoMapProps) => {
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing"></script> 
    </head>
    <body >
      <div id="map" style="width: 100%; height: 192px"></div>
      <script type="text/javascript">
        (function () {
          // id가 "map"인 요소에 지도를 생성합니다.
          const container = document.getElementById('map');
          const options = { 
            // 지도 좌표값 설정
            center: new kakao.maps.LatLng(${initialLatitude}, ${initialLongitude}),

            // 줌 레벨을 3으로 설정
            level: 3
          };                
            
          const map = new kakao.maps.Map(container, options);
          const marker = new kakao.maps.Marker({
            // 마커가 표시될 지도
            map: map,

            // 마커가 표시될 위치
            position: new kakao.maps.LatLng(${initialLatitude}, ${initialLongitude}),
          });
        })();
      </script>       
    </body>
  </html>`;

  return <WebView source={{html: html}} />;
};
