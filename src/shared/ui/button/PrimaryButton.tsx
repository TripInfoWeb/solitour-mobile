import {COLOR} from '@src/shared/config';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

export const PrimaryButton = ({
  title,
  disabled,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        tw.style(
          pressed
            ? 'android:bg-primary-green ios:bg-primary-green-ripple'
            : disabled
              ? 'bg-custom-disabled'
              : 'bg-primary-green',
          'absolute bottom-6 left-4 right-4 flex h-12 items-center justify-center rounded-lg',
        )
      }
      android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
      disabled={disabled}
      onPress={onPress}>
      <Text style={tw`text-lg font-semibold text-white`}>{title}</Text>
    </Pressable>
  );
};
