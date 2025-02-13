import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

interface DiaryPageIndicatorProps {
  page: number;
  lastPage: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
}

export const DiaryPageIndicator = ({
  page,
  lastPage,
  goPreviousPage,
  goNextPage,
}: DiaryPageIndicatorProps) => {
  return (
    <View style={tw.style('flex flex-row items-center gap-2 pt-[2.625rem]')}>
      {page > 0 ? (
        <Pressable
          style={({pressed}) => {
            return tw.style(pressed && 'bg-slate-100', 'rounded-2xl p-2');
          }}
          onPress={() => goPreviousPage()}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronLeft.png')}
          />
        </Pressable>
      ) : (
        <View style={tw`m-2 h-6 w-6`} />
      )}
      <Text style={tw`text-2xl font-bold`}>{`Page ${page}`}</Text>
      {page < lastPage - 1 ? (
        <Pressable
          style={({pressed}) => {
            return tw.style(pressed && 'bg-slate-100', 'rounded-2xl p-2');
          }}
          onPress={() => goNextPage()}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronRight.png')}
          />
        </Pressable>
      ) : (
        <View style={tw`m-2 h-6 w-6`} />
      )}
    </View>
  );
};
