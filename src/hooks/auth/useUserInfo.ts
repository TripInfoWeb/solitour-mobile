import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/libs/getNewAccessToken';
import {User} from '@src/types/user';
import {useQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useUserInfo = (enabled?: boolean) => {
  const {data, isLoading} = useQuery<User>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const userInfoResponse = await fetch(`${BACKEND_URL}/api/users/info`, {
        method: 'GET',
        headers: {Cookie: `access_token=${accessToken}`},
      });

      if (userInfoResponse.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!userInfoResponse.ok) {
        await EncryptedStorage.clear();
      }

      return await userInfoResponse.json();
    },
    staleTime: Infinity,
    gcTime: 0,
    retry: 1,
    enabled: enabled,
  });

  return {data, isLoading};
};
