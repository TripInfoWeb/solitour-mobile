import {BACKEND_URL} from '@env';
import {useQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';
import {User} from '../model/user';
import {getNewAccessToken} from '@src/shared/api';

export const useUserInfo = (enabled?: boolean) => {
  const {data, isLoading, isError} = useQuery<User>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/users/info`, {
        method: 'GET',
        headers: {Cookie: `access_token=${accessToken}`},
      });

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        await EncryptedStorage.clear();
      }

      return await response.json();
    },
    staleTime: Infinity,
    gcTime: 0,
    retry: 1,
    enabled: enabled,
  });

  return {data, isLoading, isError};
};
