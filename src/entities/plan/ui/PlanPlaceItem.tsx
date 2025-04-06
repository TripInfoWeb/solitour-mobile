import {tw} from '@src/shared/lib/utils';
import {convertDistance, convertDuration} from '@src/shared/lib/utils';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

interface PlanPlaceItemProps {
  index: number;
  item: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    placeName: string;
  };
  distance?: number;
  duration?: number;
  isLoading: boolean;
  onPress: (latitude: number, longitude: number) => void;
}

export const PlanPlaceItem = ({
  index,
  item,
  distance,
  duration,
  isLoading,
  onPress,
}: PlanPlaceItemProps) => {
  return (
    <View style={tw`ml-1`}>
      <View
        style={tw`absolute left-2 h-full w-px border border-dashed border-[#D2D2D2]`}
      />
      <View style={tw`flex flex-row items-start gap-3.5`}>
        <Text
          style={tw`h-[1.125rem] w-[1.125rem] rounded-full bg-custom-01 text-center text-xs text-white`}>
          {index + 1}
        </Text>
        <Pressable
          style={({pressed}) =>
            tw.style(
              pressed ? 'bg-blue-100' : 'bg-white',
              'flex flex-1 flex-col gap-1 rounded-lg p-4',
            )
          }
          onPress={() => onPress(item.latitude, item.longitude)}>
          <Text
            style={tw`w-16 rounded-xl bg-[#F5EEFE] py-1 text-center text-xs text-custom-purple`}>
            관광명소
          </Text>
          <Text style={tw`font-semibold text-custom-01`}>{item.placeName}</Text>
          <Text style={tw`text-xs text-custom-03`}>{item.address}</Text>
        </Pressable>
      </View>
      {isLoading ? (
        <View style={tw`flex flex-row items-center gap-3.5`}>
          <Image
            style={tw`ml-px h-3.5 w-4`}
            source={require('@assets/common/car-icon.png')}
          />
          <Text style={tw`py-4 text-sm font-semibold text-custom-03`}>
            계산 중...
          </Text>
        </View>
      ) : distance && duration ? (
        <View style={tw`flex flex-row items-center gap-3.5`}>
          <Image
            style={tw`ml-px h-3.5 w-4`}
            source={require('@assets/common/car-icon.png')}
          />
          <Text style={tw`py-4 text-sm font-semibold text-custom-03`}>
            {convertDistance(distance)}
          </Text>
          <Text
            style={tw`text-sm text-custom-01`}>{`이동 시간 ${convertDuration(duration)}`}</Text>
        </View>
      ) : (
        <View style={tw`py-4`} />
      )}
    </View>
  );
};
