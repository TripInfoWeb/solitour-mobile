import {KAKAO_API_KEY} from '@env';
import React from 'react';
import WebView from 'react-native-webview';

export const SurveyKakaoMap = () => {
  const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing"></script> 
    </head>
    <body >
        <div id="map" style="width:500px;height:400px;"></div>
        <script type="text/javascript">
            (function () {
                const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                const options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                
                const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
                
                // 주소-좌표 변환 객체를 생성합니다
                const geocoder = new kakao.maps.services.Geocoder();
            })();
        </script>       
    </body>
</html>    
`;

  return <WebView source={{html: html}} />;
};
