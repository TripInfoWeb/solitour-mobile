import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList} from 'react-native';
import {SurveyContentItemSkeleton} from './SurveyContentItemSkeleton';

export const SurveyContentItemListSkeleton = () => {
  return (
    <FlatList
      contentContainerStyle={tw`gap-[1.125rem] pb-20`}
      columnWrapperStyle={tw`gap-2.5`}
      data={[0, 1, 2, 3]}
      renderItem={() => <SurveyContentItemSkeleton />}
      keyExtractor={item => item.toString()}
      numColumns={2}
    />
  );
};
