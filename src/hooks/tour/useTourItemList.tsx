import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api/getNewAccessToken';
import {SavedPlan} from '@src/types/plan';
import {useSuspenseQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useTourItemList = () => {
  const {data} = useSuspenseQuery<SavedPlan[]>({
    queryKey: ['tourItemList'],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
        method: 'GET',
        headers: {Cookie: `access_token=${accessToken}`},
      });

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        return [];
      }

      return await response.json();
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {tourItemList: data};
};
