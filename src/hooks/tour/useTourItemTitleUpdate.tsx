import {BACKEND_URL} from '@env';
import {zodResolver} from '@hookform/resolvers/zod';
import {getNewAccessToken} from '@src/libs/getNewAccessToken';
import {TourItemTitleSchema} from '@src/libs/zod/TourItemTitleSchema';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useTourItemTitleUpdate = (
  planId: number,
  title: string,
  modalVisible: boolean,
  closeModal: () => void,
) => {
  const methods = useForm<{title: string}>({
    resolver: zodResolver(TourItemTitleSchema),
    defaultValues: {title: title},
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(
        `${BACKEND_URL}/api/travel/user-plan/title/${planId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `access_token=${accessToken}`,
          },
          body: JSON.stringify({title: methods.getValues('title')}),
        },
      );

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        throw new Error('Failed to update title.');
      }

      return true;
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['tourItemList']});
      closeModal();
    },
    retry: 1,
    throwOnError: true,
  });

  const handleSubmit = async () => {
    await methods.trigger('title');
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  useEffect(() => {
    if (modalVisible) {
      methods.setValue('title', title);
    }
  }, [methods, modalVisible, title]);

  return {methods, isPending: mutation.isPending, handleSubmit};
};
