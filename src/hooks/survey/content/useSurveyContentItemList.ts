import {BACKEND_URL} from '@env';
import {zodResolver} from '@hookform/resolvers/zod';
import {useDebounce} from '@src/hooks/common/useDebounce';
import {getNewAccessToken} from '@src/libs/getNewAccessToken';
import {ContentTitleSchema} from '@src/libs/zod/ContentTitleSchema';
import {SurveyContent, SurveyContentList} from '@src/types/survey';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useSurveyContentItemList = (
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT',
) => {
  const {data} = useSuspenseQuery<SurveyContentList>({
    queryKey: ['surveyContentItemList', contentCategory],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(
        `${BACKEND_URL}/api/media?type=${contentCategory}&page=0&size=636`,
        {method: 'GET', headers: {Cookie: `access_token=${accessToken}`}},
      );

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      return await response.json();
    },
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
