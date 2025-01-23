import {BACKEND_URL} from '@env';
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
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    },
    staleTime: 600000,
    gcTime: 1800000,
  });

  return {diaryList: data};
};
