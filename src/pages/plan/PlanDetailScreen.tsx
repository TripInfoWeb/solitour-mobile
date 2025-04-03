import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TourKakaoMap} from '@src/components/tour/TourKakaoMap';
import {tw} from '@src/shared/lib/utils';
import {NavigationList} from '@src/types/navigation';
import React from 'react';
import {View} from 'react-native';

export const PlanDetailScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'PlanDetail'>) => {
  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <TourKakaoMap savedPlan={route.params.savedPlan} />
    </View>
  );
};
