import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/shared/lib/utils';
import {RootStackParamList} from '@src/shared/model';
import {PlanDetailViewer} from '@src/widgets/planDetailViewer';
import React from 'react';
import {View} from 'react-native';

export const PlanDetailScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'PlanDetail'>) => {
  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <PlanDetailViewer savedPlan={route.params.savedPlan} />
    </View>
  );
};
