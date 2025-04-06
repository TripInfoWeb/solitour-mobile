import {usePulseAnimation} from '@src/shared/lib/hooks';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Animated, View} from 'react-native';

export const SurveyContentItemSkeleton = () => {
  const {opacity} = usePulseAnimation();

  return (
    <View style={tw`flex flex-1 flex-col items-center gap-2`}>
      <Animated.View
        style={tw.style('h-[11.5rem] w-full rounded-lg bg-custom-gray', {
          opacity,
        })}
      />
      <Animated.View style={tw.style('h-5 w-20 bg-custom-gray', {opacity})} />
    </View>
  );
};
