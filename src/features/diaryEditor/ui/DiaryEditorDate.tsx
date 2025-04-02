import React, {useCallback, useRef} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils/tailwind';
import {COLOR} from '@src/shared/config/color';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {DiaryDateBottomSheetModal} from './DiaryDateBottomSheetModal';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/entities/diary/model/diary';

export const DiaryEditorDate = () => {
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
          tw.style(
            pressed && 'ios:bg-slate-100',
            'flex h-12 flex-row items-center gap-[1.125rem] border-b border-b-gray-200 text-gray-200',
          )
        }
        android_ripple={{color: COLOR.GRAY_RIPPLE}}
        onPress={handlePresentModalPress}>
        <Image
          style={tw`h-4 w-4`}
          source={require('@src/assets/diary/date.png')}
        />
        <Text
          style={tw.style(
            formContext.watch('endDate')
              ? 'text-primary-green'
              : formContext.formState.errors.endDate
                ? 'text-blue-500'
                : 'text-gray-500',
          )}>
          {formContext.watch('endDate') !== null
            ? `${formContext.watch('startDate')?.toLocaleDateString('ko-KR')}  -  ${formContext.watch('endDate')?.toLocaleDateString('ko-KR')}`
            : formContext.formState.errors.endDate
              ? '날짜를 입력해 주세요.'
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
