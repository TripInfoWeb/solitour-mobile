import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

interface SurveyPlaceItemProps {
  index: number;
  item: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    placeName: string;
  };
  onPress: (latitude: number, longitude: number) => void;
}

export const SurveyPlaceItem = ({
  index,
  item,
  onPress,
}: SurveyPlaceItemProps) => {
  return (
    <View style={tw`ml-1 flex flex-row items-start gap-3.5`}>
      <View style={tw`flex flex-col items-center`}>
        <Text
          style={tw`h-[1.125rem] w-[1.125rem] rounded-full bg-custom-01 text-center text-xs text-white`}>
          {index + 1}
        </Text>
        <View style={tw`w-px flex-1 border border-dashed border-[#D2D2D2]`} />
      </View>
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'bg-blue-100' : 'bg-white',
            'mb-4 flex flex-1 flex-col gap-1 rounded-lg p-4',
          ])
        }
        onPress={() => onPress(item.latitude, item.longitude)}>
        <Text
          style={tw`text-custom-purple w-16 rounded-xl bg-[#F5EEFE] py-1 text-center text-xs`}>
          관광명소
        </Text>
        <Text style={tw`font-semibold text-custom-01`}>{item.placeName}</Text>
        <Text style={tw`text-xs text-custom-03`}>{item.address}</Text>
      </Pressable>
    </View>
  );
};
