import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

interface SurveyContentItemProps {
  title: string;
  image: string;
  isActive?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

export const SurveyContentItem = ({
  title,
  image,
  isActive,
  onPress,
}: SurveyContentItemProps) => {
  return (
    <Pressable
      style={tw`flex-1`}
      onPress={onPress}
      children={({pressed}) => (
        <View style={tw`flex flex-col items-center gap-2`}>
          <Image
            style={tw.style(
              pressed || isActive
                ? 'border-8 border-primary-green'
                : 'border border-gray-200',
              'h-[11.5rem] w-full rounded-lg',
            )}
            source={{uri: image}}
          />
          <Text
            style={tw.style(
              pressed || isActive ? 'text-primary-green' : 'text-custom-03',
              'text-sm',
            )}>
            {title}
          </Text>
        </View>
      )}
    />
  );
};
