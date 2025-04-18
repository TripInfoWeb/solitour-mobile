import React, {useCallback, useRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {COLOR} from '@src/shared/config';
import {DiaryLocationBottomSheetModal} from './DiaryLocationBottomSheetModal';
import {Diary} from '@src/entities/diary';
import {useFormContext} from 'react-hook-form';

export const DiaryEditorLocation = () => {
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
          style={tw`h-[1.15625rem] w-4`}
          source={require('@assets/diary/location.png')}
        />
        <Text
          style={tw.style(
            formContext.watch('location')
              ? 'text-primary-green'
              : formContext.formState.errors.location
                ? 'text-blue-500'
                : 'text-gray-500',
          )}>
          {formContext.formState.errors.location
            ? formContext.formState.errors.location.message
            : (formContext.watch('location') ?? '장소')}
        </Text>
      </Pressable>
      <DiaryLocationBottomSheetModal
        ref={bottomSheetModalRef}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </View>
  );
};
