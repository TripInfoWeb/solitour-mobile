import {PlanItemSkeleton} from '@src/entities/plan';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {FlatList, View} from 'react-native';

export const PlanItemListSkeleton = () => {
  return (
    <View style={tw`flex h-full flex-col justify-center bg-[#F3F3F3] px-4`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex flex-col`}
        data={[0, 1]}
        renderItem={() => <PlanItemSkeleton />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
