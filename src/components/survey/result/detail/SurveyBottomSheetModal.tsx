import React from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useBackHandler} from '@src/hooks/common/useBackHandler';
import {forwardRef, useCallback} from 'react';
import {tw} from '@src/libs/tailwind';
import {Pressable, Text} from 'react-native';
import {COLOR} from '@src/constants/color';

interface SurveyBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const SurveyBottomSheetModal = forwardRef<
  BottomSheetModal,
  SurveyBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
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
      snapPoints={[340]}
      backdropComponent={renderBackdrop}
      onDismiss={removeBackPressEventListener}>
      <BottomSheetView style={tw`h-80 p-4`}>
        <Text style={tw`text-2xl font-bold text-custom-01`}>저장 완료</Text>
        <Text style={tw`text-sm text-custom-03`}>
          내 여행 리스트로 이동합니다
        </Text>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'flex h-12 flex-1 flex-row items-center justify-center rounded-lg',
            ])
          }
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}>
          <Text style={tw`text-lg font-semibold text-white`}>확인</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'flex h-12 flex-1 flex-row items-center justify-center rounded-lg',
            ])
          }
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
          onPress={() => closeBottomSheetModal()}>
          <Text style={tw`text-lg font-semibold text-white`}>취소</Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheetModal>
  );
});
