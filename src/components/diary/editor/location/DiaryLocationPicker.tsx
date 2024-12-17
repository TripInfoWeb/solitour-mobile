import React, {useCallback, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Image, Pressable, Text} from 'react-native';
import {tw} from '../../../../libs/tailwind';
import {COLOR} from '../../../../constants/color';
import {DiaryLocationBottomSheetModal} from './DiaryLocationBottomSheetModal';

export const DiaryLocationPicker = () => {
  const [location, setLocation] = useState<string | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
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
          source={require('../../assets/diary/location.png')}
        />
        <Text
          style={tw.style(location ? 'text-primary-green' : 'text-gray-500')}>
          {location ?? '장소'}
        </Text>
      </Pressable>
      <DiaryLocationBottomSheetModal
        ref={bottomSheetModalRef}
        location={location}
        setLocation={(value: string) => setLocation(value)}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </BottomSheetModalProvider>
  );
};
