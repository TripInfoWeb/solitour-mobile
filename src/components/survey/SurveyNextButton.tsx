import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Pressable, Text} from 'react-native';



export const SurveyNextButton = () => {
  return (
    <Pressable
      style={tw`absolute bottom-0 left-0 right-0 flex h-14 items-center justify-center bg-custom-disabled`}>
      <Text style={tw`text-lg font-semibold text-white`}>다음</Text>
    </Pressable>
  );
};
