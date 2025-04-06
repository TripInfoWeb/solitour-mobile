import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {forwardRef} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {COLOR} from '@src/shared/config';
import {PrimaryButton} from '@src/shared/ui/button';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/entities/diary';
import {FEELING_LIST} from '../config/feelingList';
import {BottomSheetModalTemplate} from '@src/shared/ui/bottomSheetModal';

interface DiaryFeelingBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryFeelingBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryFeelingBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const formContext = useFormContext<Diary>();

  return (
    <BottomSheetModalTemplate
      ref={bottomSheetModalRef}
      snapPoints={[340]}
      closeBottomSheetModal={closeBottomSheetModal}>
      <BottomSheetView style={tw`h-80 px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>기분</Text>
          <Pressable
            style={({pressed}) =>
              tw.style(pressed && 'ios:bg-slate-100', 'rounded-2xl p-2')
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('@assets/common/close.png')}
            />
          </Pressable>
        </View>
        <FlatList
          style={tw`pt-3`}
          data={FEELING_LIST}
          renderItem={({item}) => (
            <Pressable
              style={({pressed}) =>
                tw.style(
                  pressed && 'ios:bg-green-100',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-3',
                )
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}
              onPress={() => {
                formContext.setValue('feeling', item.label);
                formContext.trigger('feeling');
              }}>
              <Image style={tw`h-10 w-8`} source={item.source} />
              <Text
                style={tw.style(
                  formContext.watch('feeling') === item.label
                    ? 'text-primary-green'
                    : 'text-gray-500',
                )}>
                {item.label}
              </Text>
            </Pressable>
          )}
          keyExtractor={item => item.label}
          numColumns={3}
        />
        <PrimaryButton
          title="선택하기"
          disabled={formContext.watch('feeling') === null}
          onPress={() => closeBottomSheetModal()}
        />
      </BottomSheetView>
    </BottomSheetModalTemplate>
  );
});
