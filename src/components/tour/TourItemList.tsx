import React from 'react';
import {ScrollView} from 'react-native';
import {tw} from '@src/libs/tailwind';
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
      {tourItemList.map(item => (
        <TourItem key={item.plan.planId} data={item} />
      ))}
    </ScrollView>
  );
};
