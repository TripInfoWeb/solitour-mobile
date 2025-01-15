import {useEffect} from 'react';
import {Animated, useAnimatedValue} from 'react-native';

export const usePulseAnimation = () => {
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

  return {opacity};
};
