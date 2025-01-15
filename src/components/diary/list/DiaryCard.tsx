import {useCardFlipAnimation} from '@src/hooks/diary/useCardFlipAnimation';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';

interface DiaryCardProps {
  title: string;
  period: string;
  location: string;
  imageUrl: string;
  content: string;
}

export const DiaryCard = ({
  title,
  period,
  location,
  imageUrl,
  content,
}: DiaryCardProps) => {
  const {interpolate, isTail, flipCard} = useCardFlipAnimation();

  // 뒷면
  if (isTail) {
    return (
      <View style={tw`px-3 pb-5`}>
        <Animated.View
          style={tw.style(
            'h-[26rem] w-[17.75rem] rounded-xl border border-gray-200 p-6',
            {
              transform: [{rotateY: interpolate}, {perspective: 1000}],
            },
          )}
          onTouchEndCapture={() => flipCard()}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Image
              style={tw`h-[1.1875rem] w-4`}
              source={require('@src/assets/diary/location-active.png')}
            />
            <Text style={tw`text-gray-500`}>{location}</Text>
          </View>
          <Image
            style={tw`mt-20 h-[4.375rem] w-14`}
            source={require('@src/assets/diary/feeling1.png')}
            // todo
          />
          <Text style={tw`pt-5 text-2xl font-bold`}>{title}</Text>
          <Text style={tw`pt-1 text-gray-500`}>{period}</Text>
          <Text style={tw`pt-4`} numberOfLines={5} ellipsizeMode="tail">
            {content}
          </Text>
        </Animated.View>
      </View>
    );
  }

  // 앞면
  return (
    <View style={tw`px-3 pb-5`}>
      <Animated.View
        style={tw.style(
          'relative h-[26rem] w-[17.75rem] rounded-xl border border-gray-200',
          {
            transform: [{rotateY: interpolate}, {perspective: 1000}],
          },
        )}
        onTouchEndCapture={() => flipCard()}>
        <ImageBackground
          style={tw`flex-1`}
          source={{uri: imageUrl}}
          resizeMode="cover"
        />
        <View style={tw`absolute bottom-[1.875rem] flex flex-col gap-1 px-8`}>
          <Text style={tw`text-xl font-semibold text-black`}>{title}</Text>
          <Text style={tw`text-sm text-black`}>{period}</Text>
        </View>
      </Animated.View>
    </View>
  );
};
