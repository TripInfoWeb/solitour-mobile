import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Image, Text, ToastAndroid, View} from 'react-native';

interface DiaryCardProps {
  title: string;
  period: string;
  image: any;
}

export const DiaryCard = ({title, period, image}: DiaryCardProps) => {
  return (
    <View style={tw`px-3`}>
      <View
        style={tw`0 relative h-[26rem] w-[17.75rem] rounded-xl`}
        onTouchEndCapture={() =>
          ToastAndroid.showWithGravity(
            title,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
        }>
        <Image style={tw`h-full w-full rounded-xl`} source={image} />
        <View style={tw`absolute bottom-[1.875rem] flex flex-col gap-1 px-8`}>
          <Text style={tw`text-xl font-semibold text-white`}>{title}</Text>
          <Text style={tw`text-sm text-white`}>{period}</Text>
        </View>
      </View>
    </View>
  );
};
