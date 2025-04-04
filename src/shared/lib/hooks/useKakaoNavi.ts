import {getKakaoNaviInfo} from '@src/shared/api';
import {useQuery} from '@tanstack/react-query';

export const useKakaoNavi = (
  planId: number,
  day: number,
  origin: [number, number],
  destination: [number, number],
  waypoints: [number, number][],
) => {
  const {data, isLoading} = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['kakaoNavi', planId, day],
    queryFn: () => getKakaoNaviInfo(origin, destination, waypoints),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });

  return {kakaoNaviInfo: data, isLoading};
};
