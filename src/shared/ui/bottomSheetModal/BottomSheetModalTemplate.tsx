import {useBackHandler} from '@src/shared/lib/hooks';
import React, {forwardRef, useCallback} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {tw} from '@src/shared/lib/utils';

interface BottomSheetModalTemplateProps {
  children: React.ReactNode;
  snapPoints: number[];
  closeBottomSheetModal: () => void;
}

export const BottomSheetModalTemplate = forwardRef<
  BottomSheetModal,
  BottomSheetModalTemplateProps
>(({children, snapPoints, closeBottomSheetModal}, bottomSheetModalRef) => {
  const {addBackPressEventListener, removeBackPressEventListener} =
    useBackHandler(closeBottomSheetModal);
  const renderBackdrop = useCallback(
    (props: any) => {
      addBackPressEventListener();
      return (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="none"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      );
    },
    [addBackPressEventListener],
  );

  return (
    <BottomSheetModal
      style={tw`rounded-2xl`}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onDismiss={removeBackPressEventListener}>
      {children}
    </BottomSheetModal>
  );
});
