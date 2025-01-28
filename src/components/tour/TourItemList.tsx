import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {TourItem} from './TourItem';
import {useTourItemList} from '@src/hooks/tour/useTourItemList';

export const TourItemList = () => {
  const {tourItemList} = useTourItemList();

  return (
    <View
      style={tw.style(
        tourItemList.length === 0 ? 'bg-white' : 'bg-[#F3F3F3]',
        'flex h-full flex-col justify-center px-4',
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
        <FlatList
          contentContainerStyle={tw`flex flex-col`}
          data={tourItemList}
          renderItem={({item}) => <TourItem data={item} />}
          keyExtractor={item => item.plan.planId.toString()}
        />
      )}
    </View>
  );
};
