import {usePulseAnimation} from '@src/hooks/common/usePulseAnimation';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {
  Animated,
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

interface DiaryListViewerSkeletonProps {
  page: number;
}

export const DiaryListViewerSkeleton = ({
  page,
}: DiaryListViewerSkeletonProps) => {
  const {width} = useWindowDimensions();
  const {opacity} = usePulseAnimation();

  return (
    <View style={tw`flex h-full flex-col items-center bg-white pt-[2.625rem]`}>
      <Text style={tw`text-2xl font-bold`}>{`Page ${page}`}</Text>
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
    </View>
  );
};
