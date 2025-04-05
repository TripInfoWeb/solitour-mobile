import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {usePlanItemList} from '../model/usePlanItemList';
import {PlanItem} from '@src/entities/plan';

export const PlanItemList = () => {
  const {planItemList} = usePlanItemList();

  return (
    <ScrollView
      style={tw.style(
        planItemList.length === 0 ? 'bg-white' : 'bg-[#F3F3F3]',
        'flex h-full flex-col px-4',
      )}>
      {planItemList.length === 0 ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require('@assets/tour/tour-empty.png')}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        planItemList.map(item => (
          <PlanItem key={item.plan.planId} data={item} />
        ))
      )}
    </ScrollView>
  );
};
