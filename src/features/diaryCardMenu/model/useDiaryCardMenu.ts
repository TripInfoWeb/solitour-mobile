import {deleteDiary} from '@src/entities/diary';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';

export const useDiaryCardMenu = (diaryId: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteDiary(diaryId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['diaryList']});
    },
    retry: 1,
    throwOnError: true,
  });

  const handleDeleteButtonClick = () => {
    Alert.alert('여행일기 삭제', '정말 삭제하시겠습니까?', [
      {text: '취소'},
      {
        text: '삭제',
        onPress: () => {
          mutation.mutate();
        },
      },
    ]);
  };

  return {isPending: mutation.isPending, handleDeleteButtonClick};
};
