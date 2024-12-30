import {tw} from '@src/libs/tailwind';
import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';

interface SurveyButtonProps {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const SurveyButton = ({title, onPress}: SurveyButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        tw.style([
          pressed ? 'bg-primary-green' : 'bg-white',
          'flex h-16 flex-1 items-center justify-center rounded-lg border border-gray-200',
        ])
      }
      onPress={onPress}
      children={({pressed}) => (
        <Text
          style={tw.style([
            pressed ? 'text-white' : 'text-custom-01',
            'text-center',
          ])}>
          {title}
        </Text>
      )}
    />
  );
};
