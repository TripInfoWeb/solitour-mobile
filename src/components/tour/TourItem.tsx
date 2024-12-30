import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Text, View} from 'react-native';

export const TourItem = () => {
  return (
    <View
      style={tw`flex h-[7.5rem] w-full flex-col gap-3 rounded-xl bg-custom-gray px-4 pt-3.5`}>
      <Text style={tw`text-custom-01 text-lg font-bold`}>
        뉴진스 부산 2박 3일 여행 코스
      </Text>
      <View style={tw`flex flex-col gap-1`}>
        <View style={tw`flex flex-row items-center gap-4`}>
          <Text style={tw`text-custom-03 text-sm`}>‧ K-POP</Text>
          <Text style={tw`text-custom-03`}>뉴진스 코드</Text>
        </View>
        <View style={tw`flex flex-row items-center gap-4`}>
          <Text style={tw`text-custom-03 text-sm`}>‧ 총 거리</Text>
          <Text style={tw`text-custom-03`}>50km</Text>
        </View>
      </View>
    </View>
  );
};
