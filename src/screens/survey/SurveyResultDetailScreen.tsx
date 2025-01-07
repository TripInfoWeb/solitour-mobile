import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SurveyKakaoMap} from '@src/components/survey/result/detail/SurveyKakaoMap';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import React from 'react';
import {View} from 'react-native';

export const SurveyResultDetailScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'SurveyResultDetail'>) => {
  const {index, plan} = route.params;

  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <SurveyKakaoMap index={index} plan={plan} />
    </View>
  );
};
