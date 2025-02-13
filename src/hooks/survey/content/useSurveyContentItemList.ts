import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/libs/getNewAccessToken';
import {SurveyContentList} from '@src/types/survey';
import {useSuspenseQuery} from '@tanstack/react-query';
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

  return {surveyContentList: data};
};
