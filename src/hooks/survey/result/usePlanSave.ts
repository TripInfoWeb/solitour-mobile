import {BACKEND_URL} from '@env';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useMutation} from '@tanstack/react-query';
import {useRef} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const usePlanSave = (planId: number) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
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
      bottomSheetModalRef.current?.present();
    },
  });

  const handleSaveButtonClick = () => {
    mutation.mutate();
  };

  return {
    isPending: mutation.isPending,
    bottomSheetModalRef,
    handleSaveButtonClick,
  };
};
