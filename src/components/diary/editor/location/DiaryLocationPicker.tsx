import React, {useCallback, useRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';
import {DiaryAddressBottomSheetModal} from './DiaryLocationBottomSheetModal';
import {Diary} from '@src/types/diary';
import {useFormContext} from 'react-hook-form';

export const DiaryLocationPicker = () => {
  const formContext = useFormContext<Diary>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'ios:bg-slate-100' : '',
            'flex h-12 flex-row items-center gap-[1.125rem] border-b border-gray-200 text-gray-200',
          ])
        }
        android_ripple={{color: COLOR.GRAY_RIPPLE}}
        onPress={handlePresentModalPress}>
        <Image
          style={tw`h-[1.15625rem] w-4`}
          source={require('@src/assets/diary/location.png')}
        />
        <Text
          style={tw.style(
            formContext.getValues('address')
              ? 'text-primary-green'
              : 'text-gray-500',
          )}>
          {formContext.getValues('address') ?? '장소'}
        </Text>
      </Pressable>
      <DiaryAddressBottomSheetModal
        ref={bottomSheetModalRef}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </View>
  );
};
