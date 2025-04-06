import {useQuery} from '@tanstack/react-query';
import {signIn} from '../api/signIn';

export const useSignIn = (code: string) => {
  const {isSuccess} = useQuery({
    queryKey: ['signIn', code],
    queryFn: () => signIn(code),
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });

  return {isSuccess};
};
