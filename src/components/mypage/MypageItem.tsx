import React from 'react';
import {Pressable, Text} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';

interface MypageItemProps {
  children: React.ReactNode;
  title: string;
  onPress?: () => void;
}

export const MypageItem = ({children, title, onPress}: MypageItemProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        tw.style([
          pressed ? 'ios:bg-slate-100' : '',
          'flex h-16 w-full flex-row items-center justify-between border-b border-b-gray-200',
        ])
      }
      android_ripple={{color: COLOR.GRAY_RIPPLE}}
      onPress={onPress}>
      <Text>{title}</Text>
      {children}
    </Pressable>
  );
};
