import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {PlanItem, usePlanList} from '@src/entities/plan';

export const PlanItemList = () => {
  const {planList} = usePlanList();

  return (
    <ScrollView
      style={tw.style(
        planList.length === 0 ? 'bg-white' : 'bg-[#F3F3F3]',
        'flex h-full flex-col px-4',
      )}>
      {planList.length === 0 ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require('@assets/tour/tour-empty.png')}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        planList.map(item => <PlanItem key={item.plan.planId} data={item} />)
      )}
    </ScrollView>
  );
};
