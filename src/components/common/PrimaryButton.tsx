import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {tw} from '../../libs/tailwind';
import {COLOR} from '../../constants/color';

interface PrimaryButtonProps {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const PrimaryButton = ({title, onPress}: PrimaryButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => {
        return tw.style([
          pressed
            ? 'android:bg-primary-green ios:bg-primary-green-ripple'
            : 'bg-primary-green',
          'absolute bottom-6 left-4 right-4 flex h-12 items-center justify-center rounded-lg',
        ]);
      }}
      android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
      onPress={onPress}>
      <Text style={tw`text-lg font-semibold text-white`}>{title}</Text>
    </Pressable>
  );
};
