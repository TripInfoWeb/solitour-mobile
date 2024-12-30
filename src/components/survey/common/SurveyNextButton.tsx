import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';

interface SurveyNextButtonProps {
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

export const SurveyNextButton = ({
  disabled,
  onPress,
}: SurveyNextButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        tw.style([
          pressed
            ? 'android:bg-primary-green ios:bg-primary-green-ripple'
            : disabled
              ? 'bg-custom-disabled'
              : 'bg-primary-green',
          'absolute bottom-0 left-0 right-0 flex h-14 items-center justify-center',
        ])
      }
      android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
      disabled={disabled}
      onPress={onPress}>
      <Text style={tw`text-lg font-semibold text-white`}>다음</Text>
    </Pressable>
  );
};
