import {BACKEND_URL} from '@env';
import {zodResolver} from '@hookform/resolvers/zod';
import {NicknameSchema} from '@src/features/nicknameEditor/model/NicknameSchema';
import {getNewAccessToken} from '@src/shared/api/getNewAccessToken';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useNicknameModal = (
  nickname: string,
  modalVisible: boolean,
  closeModal: () => void,
) => {
  const methods = useForm<{
    nickname: string;
  }>({
    resolver: zodResolver(NicknameSchema),
    defaultValues: {nickname: nickname},
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/users/nickname`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `access_token=${accessToken}`,
        },
        body: JSON.stringify({nickname: methods.getValues('nickname')}),
      });

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        throw new Error('Failed to update nickname.');
      }

      return true;
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['userInfo']});
      closeModal();
    },
    retry: 1,
    throwOnError: true,
  });

  const handleSubmit = async () => {
    await methods.trigger('nickname');
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  useEffect(() => {
    if (modalVisible) {
      methods.setValue('nickname', nickname);
    }
  }, [methods, modalVisible, nickname]);

  return {methods, isPending: mutation.isPending, handleSubmit};
};
