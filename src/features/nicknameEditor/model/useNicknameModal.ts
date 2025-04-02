import {zodResolver} from '@hookform/resolvers/zod';
import {NicknameSchema} from '@src/features/nicknameEditor/model/NicknameSchema';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {updateNickname} from '../api/nickname';

export const useNicknameModal = (
  nickname: string,
  modalVisible: boolean,
  closeModal: () => void,
) => {
  const methods = useForm<{
    nickname: string;
  }>({
    resolver: zodResolver(NicknameSchema),
    defaultValues: {nickname},
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => updateNickname(methods.getValues('nickname')),
    onSuccess: () => {
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
