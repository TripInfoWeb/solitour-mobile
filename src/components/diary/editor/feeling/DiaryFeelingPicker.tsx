import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import {DiaryFeelingBottomSheetModal} from './DiaryFeelingBottomSheetModal';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/types/diary';

export const DiaryFeelingPicker = () => {
  const formContext = useFormContext<Diary>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <Pressable
        style={({pressed}) =>
          tw.style(
            pressed && 'ios:bg-slate-100',
            'flex h-12 flex-row items-center gap-[1.125rem] border-b border-gray-200 text-gray-200',
          )
        }
        android_ripple={{color: COLOR.GRAY_RIPPLE}}
        onPress={handlePresentModalPress}>
        <Image
          style={tw`h-4 w-4`}
          source={require('@src/assets/diary/feeling.png')}
        />
        <Text
          style={tw.style(
            formContext.watch('feeling')
              ? 'text-primary-green'
              : formContext.formState.errors.feeling
                ? 'text-blue-500'
                : 'text-gray-500',
          )}>
          {formContext.formState.errors.feeling
            ? formContext.formState.errors.feeling.message
            : (formContext.watch('feeling') ?? '기분')}
        </Text>
      </Pressable>
      <DiaryFeelingBottomSheetModal
        ref={bottomSheetModalRef}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </View>
  );
};
