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
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/types/navigation';

interface SurveyBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const SurveyBottomSheetModal = forwardRef<
  BottomSheetModal,
  SurveyBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const navigation = useNavigation<NavigationProps>();
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
      snapPoints={[260]}
      backdropComponent={renderBackdrop}
      onDismiss={removeBackPressEventListener}>
      <BottomSheetView style={tw`flex h-60 flex-col items-center p-4`}>
        <Text style={tw`text-center text-2xl font-bold text-custom-01`}>
          저장 완료!
        </Text>
        <Text style={tw`pt-0.5 text-center text-sm text-custom-03`}>
          내 여행 리스트로 이동합니다
        </Text>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'mt-8 flex h-12 w-full flex-row items-center justify-center rounded-lg',
            ])
          }
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabs', params: {screen: 'Tour'}}],
            })
          }>
          <Text style={tw`text-lg font-semibold text-white`}>확인</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed
                ? 'android:bg-custom-disabled ios:bg-custom-gray-ripple'
                : 'bg-custom-disabled',
              'mt-3 flex h-12 w-full flex-row items-center justify-center rounded-lg',
            ])
          }
          android_ripple={{color: COLOR.GRAY_RIPPLE}}
          onPress={() => closeBottomSheetModal()}>
          <Text style={tw`text-lg font-semibold text-white`}>취소</Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheetModal>
  );
});
