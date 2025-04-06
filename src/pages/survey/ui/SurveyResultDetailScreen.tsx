import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/shared/lib/utils';
import {RootStackParamList} from '@src/shared/model';
import {SurveyResultDetailViewer} from '@src/widgets/surveyResultDetailViewer';
import React from 'react';
import {View} from 'react-native';

export const SurveyResultDetailScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'SurveyResultDetail'>) => {
  const {index, plan} = route.params;

  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <SurveyResultDetailViewer index={index} plan={plan} />
    </View>
  );
};
