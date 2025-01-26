import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TourKakaoMap} from '@src/components/tour/TourKakaoMap';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import React from 'react';
import {View} from 'react-native';

export const TourDetailScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'TourDetail'>) => {
  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <TourKakaoMap savedPlan={route.params.savedPlan} />
    </View>
  );
};
