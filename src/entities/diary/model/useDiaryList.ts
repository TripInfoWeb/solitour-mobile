import {useSuspenseQuery} from '@tanstack/react-query';
import {getDiaryList} from '../api/diaryList';

export const useDiaryList = (page: number) => {
  const {data} = useSuspenseQuery({
    queryKey: ['diaryList', page],
    queryFn: () => getDiaryList(page),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {diaryList: data};
};
