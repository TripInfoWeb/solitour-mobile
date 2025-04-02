import {tw} from '@src/shared/lib/utils/tailwind';
import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';

interface SurveyButtonProps {
  title: string;
  isActive?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

export const SurveyButton = ({title, isActive, onPress}: SurveyButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        tw.style([
          pressed || isActive ? 'bg-primary-green' : 'bg-white',
          'flex h-16 flex-1 items-center justify-center rounded-lg border border-gray-200',
        ])
      }
      onPress={onPress}
      children={({pressed}) => (
        <Text
          style={tw.style([
            pressed || isActive ? 'text-white' : 'text-custom-01',
            'text-center',
          ])}>
          {title}
        </Text>
      )}
    />
  );
};
