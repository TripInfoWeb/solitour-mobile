import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/shared/lib/utils';
import {RootStackParamList} from '@src/shared/model';
import React from 'react';
import {View} from 'react-native';
import {SurveyResultItemList} from '@src/widgets/surveyResultItemList';

export const SurveyResultListScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'SurveyResultList'>) => {
  return (
    <View style={tw`flex h-full flex-col gap-6 bg-[#F3F3F3] px-4`}>
      <SurveyResultItemList planList={route.params.plans} />
    </View>
  );
};
