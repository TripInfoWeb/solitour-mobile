import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {FlatList, View} from 'react-native';
import {TourItemSkeleton} from '../../../components/skeleton/tour/TourItemSkeleton';

export const TourItemListSkeleton = () => {
  return (
    <View style={tw`flex h-full flex-col justify-center bg-[#F3F3F3] px-4`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex flex-col`}
        data={[0, 1]}
        renderItem={() => <TourItemSkeleton />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
