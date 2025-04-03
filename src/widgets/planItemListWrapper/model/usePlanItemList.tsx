import {getPlanList} from '@src/entities/plan';
import {useSuspenseQuery} from '@tanstack/react-query';

export const usePlanItemList = () => {
  const {data} = useSuspenseQuery({
    queryKey: ['planItemList'],
    queryFn: () => getPlanList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {planItemList: data};
};
