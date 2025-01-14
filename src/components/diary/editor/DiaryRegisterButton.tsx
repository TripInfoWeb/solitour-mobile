import {tw} from '@src/libs/tailwind';
import {Diary} from '@src/types/diary';
import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {Pressable, Text} from 'react-native';

interface DiaryRegisterButtonProps {
  methods: UseFormReturn<Diary, any, undefined>;
}

export const DiaryRegisterButton = ({methods}: DiaryRegisterButtonProps) => {
  const handleSubmit = () => {
    console.log(methods.getValues('title'));
  };

  return (
    <Pressable
      style={({pressed}) => {
        return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
      }}
      onPress={() => handleSubmit()}>
      <Text style={tw`font-semibold text-primary-green`}>등록</Text>
    </Pressable>
  );
};
