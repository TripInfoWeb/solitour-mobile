import {BACKEND_URL, KAKAO_REDIRECT_URL} from '@env';
import {useQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useSignIn = (code: string) => {
  const {isSuccess} = useQuery({
    queryKey: ['signIn', code],
    queryFn: async () => {
      const signInResponse = await fetch(
        `${BACKEND_URL}/api/auth/oauth2/login?type=kakao&redirectUrl=${KAKAO_REDIRECT_URL}&code=${code}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      const cookies = signInResponse.headers.get('set-cookie')?.split(',');

      if (!signInResponse.ok || !cookies) {
        throw new Error(signInResponse.statusText);
      }

      for (const cookie of cookies) {
        const [key, value] = cookie
          .split(';')[0]
          .split('=')
          .map(str => str.trim());

        await EncryptedStorage.setItem(key, value);
      }

      return true;
    },
    staleTime: 0,
    gcTime: 0,
    retry: 0,
  });

  return {isSuccess};
};
