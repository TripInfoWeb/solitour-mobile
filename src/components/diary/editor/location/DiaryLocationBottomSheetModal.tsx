import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useCallback} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';
import {PrimaryButton} from '@src/components/common/PrimaryButton';
import {useBackHandler} from '@src/hooks/useBackHandler';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/types/diary';

const LOCATIONLIST = [
  '서울',
  '경기',
  '제주',
  '인천',
  '부산',
  '강원',
  '울산',
  '대구',
  '광주',
  '대전',
  '경남',
  '경북',
  '세종',
  '충청',
  '전라',
] as const;

interface DiaryLocationBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryLocationBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryLocationBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const formContext = useFormContext<Diary>();
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
      <BottomSheetView style={tw`h-80 px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>장소</Text>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'ios:bg-slate-100' : '', 'rounded-2xl p-2'])
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('@src/assets/common/close.png')}
            />
          </Pressable>
        </View>
        <FlatList
          style={tw`pt-3`}
          contentContainerStyle={tw`flex flex-col items-start gap-2.5`}
          data={LOCATIONLIST}
          renderItem={({item}) => (
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'bg-primary-green' : '',
                  formContext.watch('location') === item
                    ? 'border-primary-green bg-primary-green'
                    : 'border-gray-200',
                  'mr-1.5 flex h-10 w-[3.75rem] items-center justify-center rounded-full border',
                ])
              }
              onPress={() => formContext.setValue('location', item)}
              children={({pressed}) => (
                <Text
                  style={tw.style(
                    pressed || formContext.watch('location') === item
                      ? 'text-white'
                      : 'text-black',
                    'font-semibold',
                  )}>
                  {item}
                </Text>
              )}
            />
          )}
          keyExtractor={item => item}
          numColumns={5}
        />
        <PrimaryButton
          title="선택하기"
          disabled={formContext.watch('location') === null}
          onPress={() => closeBottomSheetModal()}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});
