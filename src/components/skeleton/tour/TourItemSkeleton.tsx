import React from 'react';
import {usePulseAnimation} from '@src/hooks/common/usePulseAnimation';
import {Animated, FlatList, View} from 'react-native';
import {tw} from '@src/libs/tailwind';

export const TourItemSkeleton = () => {
  const {opacity} = usePulseAnimation();

  return (
    <View
      style={tw`mt-4 flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5`}>
      <View style={tw`flex flex-col`}>
        <Animated.View style={tw.style('h-6 w-20 bg-custom-gray', {opacity})} />
        <Animated.View
          style={tw.style('mt-4 h-4 w-40 bg-custom-gray', {opacity})}
        />
        <Animated.View
          style={tw.style('mt-1 h-4 w-32 bg-custom-gray', {opacity})}
        />
      </View>
      <FlatList
        style={tw`pt-2`}
        data={[0, 1, 2]}
        renderItem={() => (
          <View style={tw`flex flex-row items-start gap-3.5`}>
            <View style={tw`flex flex-col items-center`}>
              <View style={tw`h-2 w-2 rounded-full bg-custom-01`} />
              <View
                style={tw`h-10 w-px border border-dashed border-[#D2D2D2]`}
              />
            </View>
            <Animated.View
              style={tw.style('-mt-[0.3rem] h-4 w-20 bg-custom-gray', {
                opacity,
              })}
            />
          </View>
        )}
        keyExtractor={item => item.toString()}
      />
      <Animated.View
        style={tw.style('h-[2.625rem] rounded-lg bg-[#E9F0F9]', {opacity})}
      />
    </View>
  );
};
