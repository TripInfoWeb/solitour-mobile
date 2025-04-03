import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api/getNewAccessToken';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useDiaryCardMenu = (diaryId: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/diary/${diaryId}`, {
        method: 'DELETE',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      if (response.status === 401) {
        await getNewAccessToken();
        throw new Error('Access token has expired.');
      }

      if (!response.ok) {
        throw new Error('Failed to delete.');
      }

      return true;
    },
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
