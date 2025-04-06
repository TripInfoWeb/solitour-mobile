import {zodResolver} from '@hookform/resolvers/zod';
import {useDebounce} from '@src/shared/lib/hooks';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ContentTitleSchema} from './ContentTitleSchema';
import {SurveyContent, useSurveyContentList} from '@src/entities/survey';

export const useSurveyContentItemList = (
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT',
) => {
  const {data} = useSurveyContentList(contentCategory);

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
