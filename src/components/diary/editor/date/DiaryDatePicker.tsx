import React, {useCallback, useRef} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {DiaryDateBottomSheetModal} from './DiaryDateBottomSheetModal';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/types/diary';

export const DiaryDatePicker = () => {
  const formContext = useFormContext<Diary>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    formContext.setValue('startDate', null);
    formContext.setValue('endDate', null);
    bottomSheetModalRef.current?.present();
  }, [formContext]);

  return (
    <View>
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'ios:bg-slate-100' : '',
            'flex h-12 flex-row items-center gap-[1.125rem] border-b border-b-gray-200 text-gray-200',
          ])
        }
        android_ripple={{color: COLOR.GRAY_RIPPLE}}
        onPress={handlePresentModalPress}>
        <Image
          style={tw`h-4 w-4`}
          source={require('@src/assets/diary/date.png')}
        />
        <Text
          style={tw.style(
            formContext.getValues('endDate')
              ? 'text-primary-green'
              : 'text-gray-500',
          )}>
          {formContext.getValues('endDate') !== null
            ? `${formContext.getValues('startDate')?.toLocaleDateString('ko-KR')}  -  ${formContext.getValues('endDate')?.toLocaleDateString('ko-KR')}`
            : '날짜'}
        </Text>
      </Pressable>
      <DiaryDateBottomSheetModal
        ref={bottomSheetModalRef}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </View>
  );
};
