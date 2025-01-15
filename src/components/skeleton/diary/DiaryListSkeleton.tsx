import {usePulseAnimation} from '@src/hooks/common/usePulseAnimation';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Animated, FlatList, useWindowDimensions, View} from 'react-native';

export const DiaryListSkeleton = () => {
  const {width} = useWindowDimensions();
  const {opacity} = usePulseAnimation();

  return (
    <FlatList
      style={tw`flex-grow-0 pt-7`}
      horizontal={true}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentOffset={{
        x: (924 - width) / 2,
        y: 0,
      }}
      data={[0, 1, 2]}
      renderItem={() => (
        <View style={tw`px-3 pb-5`}>
          <Animated.View
            style={tw.style(
              'h-[26rem] w-[17.75rem] rounded-xl bg-custom-gray',
              {opacity},
            )}
          />
        </View>
      )}
      keyExtractor={item => item.toString()}
    />
  );
};
