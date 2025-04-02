import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils/tailwind';
import {TourItem} from './TourItem';
import {useTourItemList} from '@src/hooks/tour/useTourItemList';

export const TourItemList = () => {
  const {tourItemList} = useTourItemList();

  return (
    <ScrollView
      style={tw.style(
        tourItemList.length === 0 ? 'bg-white' : 'bg-[#F3F3F3]',
        'flex h-full flex-col px-4',
      )}>
      {tourItemList.length === 0 ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require('@src/assets/tour/tour-empty.png')}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        tourItemList.map(item => (
          <TourItem key={item.plan.planId} data={item} />
        ))
      )}
    </ScrollView>
  );
};
