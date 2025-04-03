import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {savePlan} from '@src/entities/plan';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRef} from 'react';

export const useSavePlan = (planId: number) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => savePlan(planId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['planItemList']});
      bottomSheetModalRef.current?.present();
    },
    retry: 1,
    throwOnError: true,
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
