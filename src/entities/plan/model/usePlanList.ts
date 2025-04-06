import {useSuspenseQuery} from '@tanstack/react-query';
import {getPlanList} from '../api/planList';

export const usePlanList = () => {
  const {data} = useSuspenseQuery({
    queryKey: ['planList'],
    queryFn: () => getPlanList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {planList: data};
};
