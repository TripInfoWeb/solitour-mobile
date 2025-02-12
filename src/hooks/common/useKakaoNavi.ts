import {KAKAO_REST_API_KEY} from '@env';
import {KakaoNaviInfo} from '@src/types/kakaoNavi';
import {useQuery} from '@tanstack/react-query';

export const useKakaoNavi = (
  origin: [number, number],
  destination: [number, number],
  waypoints: [number, number][],
) => {
  const {data, isLoading} = useQuery<KakaoNaviInfo>({
    queryKey: [
      'kakaoNavi',
      origin[0],
      origin[1],
      destination[0],
      destination[1],
    ],
    queryFn: async () => {
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
      return result.routes[0];
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
    // throwOnError: true, // TODO
  });

  return {kakaoNaviInfo: data, isLoading};
};
