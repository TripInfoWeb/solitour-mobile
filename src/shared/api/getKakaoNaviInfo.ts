import {KAKAO_REST_API_KEY} from '@env';

interface KakaoNaviInfo {
  sections: {
    distance: number; // 섹션 거리(미터)
    duration: number; // 전체 검색 결과 이동 시간(초)
  }[];
}

export async function getKakaoNaviInfo(
  origin: [number, number],
  destination: [number, number],
  waypoints: [number, number][],
) {
  const response = await fetch(
    'https://apis-navi.kakaomobility.com/v1/directions' +
      `?origin=${origin[0]},${origin[1]}` +
      `&destination=${destination[0]},${destination[1]}` +
      `&waypoints=${waypoints.map(waypoint => `${waypoint[0]},${waypoint[1]}`).join('|')}`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  const result = await response.json();
  return result.routes[0] as KakaoNaviInfo;
}
