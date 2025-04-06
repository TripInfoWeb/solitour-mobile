import {useSuspenseQuery} from '@tanstack/react-query';
import {getSurveyContentList} from '../api/surveyContentList';

export const useSurveyContentList = (
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT',
) => {
  const {data} = useSuspenseQuery({
    queryKey: ['surveyContentList', contentCategory],
    queryFn: () => getSurveyContentList(contentCategory),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {data};
};
