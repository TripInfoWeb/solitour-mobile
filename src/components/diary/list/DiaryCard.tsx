import {tw} from '@src/libs/tailwind';
import React, {useEffect, useState} from 'react';
import {Animated, Image, Text, useAnimatedValue, View} from 'react-native';

interface DiaryCardProps {
  title: string;
  period: string;
  image: any;
}

// TODO: 코드 리팩토링
export const DiaryCard = ({title, period, image}: DiaryCardProps) => {
  const degree = useAnimatedValue(-90);
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
  };

  useEffect(() => {
    rotateTo0deg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 뒷면
  if (isTail) {
    return (
      <View style={tw`px-3`}>
        <Animated.View
          style={tw.style(
            'h-[26rem] w-[17.75rem] rounded-xl border border-gray-200 p-6',
            {
              transform: [
                {
                  rotateY: degree.interpolate({
                    inputRange: [-90, 0, 90],
                    outputRange: ['-90deg', '0deg', '90deg'],
                  }),
                },
                {perspective: 1000},
              ],
            },
          )}
          onTouchEndCapture={() => {
            if (canRotate) {
              flipCard();
            }
          }}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Image
              style={tw`h-[1.1875rem] w-4`}
              source={require('@src/assets/diary/location-active.png')}
            />
            <Text style={tw`text-gray-500`}>경기</Text>
          </View>
          <Image
            style={tw`mt-20 h-[4.375rem] w-14`}
            source={require('@src/assets/diary/feeling1.png')}
          />
          <Text style={tw`pt-5 text-2xl font-bold`}>{title}</Text>
          <Text style={tw`pt-1 text-gray-500`}>{period}</Text>
          <Text style={tw`pt-4`} numberOfLines={5} ellipsizeMode="tail">
            7월 나 홀로 3박 4일 제주도 여행을 다녀왔다. 제주도는 언제 가도 너무
            좋아 자주 와봤는데 혼자 여행은 처음이라 많은 것을 느낀 여행이었다.
            7월 나 홀로 3박 4일 제주도 여행을 다녀왔다. 제주도는 언제 가도 너무
            좋아 자주 와봤는데 혼자 여행은 처음이라 많은 것을 느낀 여행이었다.
          </Text>
        </Animated.View>
      </View>
    );
  }

  // 앞면
  return (
    <View style={tw`px-3`}>
      <Animated.View
        style={tw.style('relative h-[26rem] w-[17.75rem] rounded-xl', {
          transform: [
            {
              rotateY: degree.interpolate({
                inputRange: [-90, 0, 90],
                outputRange: ['-90deg', '0deg', '90deg'],
              }),
            },
            {perspective: 1000},
          ],
        })}
        onTouchEndCapture={() => {
          if (canRotate) {
            flipCard();
          }
        }}>
        <Image style={tw`h-full w-full rounded-xl`} source={image} />
        <View style={tw`absolute bottom-[1.875rem] flex flex-col gap-1 px-8`}>
          <Text style={tw`text-xl font-semibold text-white`}>{title}</Text>
          <Text style={tw`text-sm text-white`}>{period}</Text>
        </View>
      </Animated.View>
    </View>
  );
};
