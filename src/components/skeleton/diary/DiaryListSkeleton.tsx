import {tw} from '@src/libs/tailwind';
import React, {useEffect} from 'react';
import {
  Animated,
  FlatList,
  useAnimatedValue,
  useWindowDimensions,
  View,
} from 'react-native';

export const DiaryListSkeleton = () => {
  const {width} = useWindowDimensions();
  const opacity = useAnimatedValue(1);

  const pulseStart = () => {
    Animated.timing(opacity, {
      toValue: 0.25,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => pulseEnd());
  };

  const pulseEnd = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => pulseStart());
  };

  useEffect(() => {
    pulseStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {
                opacity: opacity,
              },
            )}
          />
        </View>
      )}
      keyExtractor={item => item.toString()}
    />
  );
};
