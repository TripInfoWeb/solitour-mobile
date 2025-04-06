import {useQuery} from '@tanstack/react-query';
import {getUserInfo} from '../api/userInfo';

export const useUserInfo = (enabled?: boolean) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
    staleTime: Infinity,
    gcTime: 0,
    retry: 1,
    enabled: enabled,
  });

  return {data, isLoading, isError};
};
