import React, {useCallback, useRef, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {DiaryDateBottomSheetModal} from './DiaryDateBottomSheetModal';

export const DiaryDatePicker = () => {
  const [startDate, setStateDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    setStateDate(null);
    setEndDate(null);
    bottomSheetModalRef.current?.present();
  }, []);

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
          style={tw.style(endDate ? 'text-primary-green' : 'text-gray-500')}>
          {endDate !== null
            ? `${startDate?.toLocaleDateString('ko-KR')}  -  ${endDate?.toLocaleDateString('ko-KR')}`
            : '날짜'}
        </Text>
      </Pressable>
      <DiaryDateBottomSheetModal
        ref={bottomSheetModalRef}
        endDate={endDate}
        setStateDate={(date: Date | null) => setStateDate(date)}
        setEndDate={(date: Date | null) => setEndDate(date)}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </View>
  );
};
