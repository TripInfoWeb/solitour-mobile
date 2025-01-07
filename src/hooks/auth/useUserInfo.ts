import {BACKEND_URL} from '@env';
import {User} from '@src/types/user';
import {useQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useUserInfo = () => {
  const {data, isLoading, isError} = useQuery<User>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const userInfoResponse = await fetch(`${BACKEND_URL}/api/users/info`, {
        method: 'GET',
        headers: {
          Cookie: `access_token=${accessToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      });

      return await userInfoResponse.json();
    },
    staleTime: Infinity,
    gcTime: 0,
    retry: false,
  });

  return {data, isLoading, isError};
};
