import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/libs/getNewAccessToken';
import {DiaryList} from '@src/types/diary';
import {useSuspenseQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useDiaryList = (page: number) => {
  const {data} = useSuspenseQuery<DiaryList>({
    queryKey: ['diaryList', page],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/diary?page=${page}`, {
        method: 'GET',
        headers: {Cookie: `access_token=${accessToken}`},
      });

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

  return {diaryList: data};
};
