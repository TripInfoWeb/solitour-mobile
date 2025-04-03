import {zodResolver} from '@hookform/resolvers/zod';
import {useDebounce} from '@src/shared/lib/hooks';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ContentTitleSchema} from './ContentTitleSchema';
import {getSurveyContentList, SurveyContent} from '@src/entities/survey';

export const useSurveyContentItemList = (
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT',
) => {
  const {data} = useSuspenseQuery({
    queryKey: ['surveyContentItemList', contentCategory],
    queryFn: () => getSurveyContentList(contentCategory),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  const methods = useForm<{title: string}>({
    resolver: zodResolver(ContentTitleSchema),
    defaultValues: {title: ''},
    mode: 'onChange',
  });

  const [surveyContentList, setSurveyContentList] = useState<SurveyContent[]>(
    data.content,
  );

  const handleFiltering = useDebounce(
    () =>
      setSurveyContentList(
        data.content.filter(content =>
          content.mediaName
            .replaceAll(' ', '')
            .includes(methods.watch('title').replaceAll(' ', '')),
        ),
      ),
    300,
  );

  useEffect(() => {
    handleFiltering();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.watch('title')]);

  return {surveyContentList, methods};
};
