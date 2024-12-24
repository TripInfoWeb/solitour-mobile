import {useEffect, useState} from 'react';
import {Animated, useAnimatedValue} from 'react-native';

export const useCardFlipAnimation = () => {
  const degree = useAnimatedValue(-90);
  const interpolate = degree.interpolate({
    inputRange: [-90, 0, 90],
    outputRange: ['-90deg', '0deg', '90deg'],
  });
  const [isTail, setIsTail] = useState(false);
  const [canRotate, setCanRotate] = useState(false);

  const rotateTo0deg = () => {
    Animated.timing(degree, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setCanRotate(true));
  };

  const flipCard = () => {
    if (canRotate) {
      setCanRotate(false);
      Animated.timing(degree, {
        toValue: 90,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIsTail(!isTail);
        degree.setValue(-90);
        rotateTo0deg();
      });
    }
  };

  useEffect(() => {
    rotateTo0deg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {interpolate, isTail, flipCard};
};
