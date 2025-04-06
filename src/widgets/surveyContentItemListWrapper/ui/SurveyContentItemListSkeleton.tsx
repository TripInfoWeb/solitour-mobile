import React from 'react';
import {Animated, FlatList, View} from 'react-native';
import {usePulseAnimation} from '@src/shared/lib/hooks';
import {tw} from '@src/shared/lib/utils';
import {SurveyContentItemSkeleton} from '@src/entities/survey';

export const SurveyContentItemListSkeleton = () => {
  const {opacity} = usePulseAnimation();

  return (
    <View>
      <Animated.View
        style={tw.style('mb-4 h-[3.25rem] rounded-full bg-custom-gray', {
          opacity,
        })}
      />
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={[0, 1, 2, 3]}
        renderItem={() => <SurveyContentItemSkeleton />}
        keyExtractor={item => item.toString()}
        numColumns={2}
      />
    </View>
  );
};
