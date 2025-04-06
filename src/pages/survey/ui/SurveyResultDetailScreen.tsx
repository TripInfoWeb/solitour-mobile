import {tw} from '@src/shared/lib/utils';
import {SurveyResultDetailViewer} from '@src/widgets/surveyResultDetailViewer';
import React from 'react';
import {View} from 'react-native';

export const SurveyResultDetailScreen = ({
  route,
}: RootStackScreenProps<'SurveyResultDetail'>) => {
  const {index, plan} = route.params;

  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <SurveyResultDetailViewer index={index} plan={plan} />
    </View>
  );
};
