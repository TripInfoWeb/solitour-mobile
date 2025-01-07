import {BACKEND_URL, KAKAO_REDIRECT_URL} from '@env';
import {useQuery} from '@tanstack/react-query';

export const useSignIn = (code: string) => {
  const {} = useQuery({
    queryKey: ['signIn', code],
    queryFn: async () => {
      const signInResponse = await fetch(
        `${BACKEND_URL}/api/auth/oauth2/login?type=kakao&redirectUrl=${KAKAO_REDIRECT_URL}&code=${code}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );
    },
    retry: 0,
  });
};
