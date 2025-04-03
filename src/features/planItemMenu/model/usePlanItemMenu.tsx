import {deletePlan} from '@src/entities/plan';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';

export const usePlanItemMenu = (planId: number, planTitle: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deletePlan(planId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['planItemList']});
    },
    retry: 1,
    throwOnError: true,
  });

  const handleDeleteButtonClick = () => {
    Alert.alert(`${planTitle} 삭제`, '정말 삭제하시겠습니까?', [
      {text: '취소'},
      {
        text: '삭제',
        onPress: () => mutation.mutate(),
      },
    ]);
  };

  return {isPending: mutation.isPending, handleDeleteButtonClick};
};
