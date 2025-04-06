import {tw} from '@src/shared/lib/utils';
import {PlanDetailViewer} from '@src/widgets/planDetailViewer';
import React from 'react';
import {View} from 'react-native';

export const PlanDetailScreen = ({
  route,
}: RootStackScreenProps<'PlanDetail'>) => {
  return (
    <View style={tw`bg-[#F3F3F3]`}>
      <PlanDetailViewer savedPlan={route.params.savedPlan} />
    </View>
  );
};
