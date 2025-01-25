import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/types/navigation';
import {useMutation} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

export const usePlanSave = (planId: number) => {
  const navigation = useNavigation<NavigationProps>();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const formData = new URLSearchParams();
      formData.append('planId', planId.toString());

      const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: `access_token=${accessToken}`,
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to save a course.');
      }

      return true;
    },
    onSuccess: () => {
      // TODO: 수정 필요

      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTabs', params: {screen: 'Tour'}}],
      });
    },
  });

  const handleSaveButtonClick = () => {
    mutation.mutate();
  };

  return {isPending: mutation.isPending, handleSaveButtonClick};
};
