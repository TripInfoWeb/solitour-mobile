import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useCallback} from 'react';
import {tw} from '../../libs/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '../../constants/color';
import {PrimaryButton} from '../common/PrimaryButton';

interface DiaryDateBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryDateBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryDateBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="none"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      style={tw`rounded-2xl`}
      ref={bottomSheetModalRef}
      snapPoints={[500]}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={tw`h-[30rem] px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>날짜</Text>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'ios:bg-slate-100' : '', 'rounded-2xl p-2'])
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('../../assets/common/close.png')}
            />
          </Pressable>
        </View>

        <PrimaryButton
          title="선택하기"
          onPress={() => closeBottomSheetModal()}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});
