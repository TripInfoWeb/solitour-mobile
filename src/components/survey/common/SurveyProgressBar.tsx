import {tw} from '@src/libs/tailwind';
import React from 'react';
import {View} from 'react-native';

interface SurveyProgressBarProps {
  totalProgress: number;
  currentProgress: number;
}

export const SurveyProgressBar = ({
  totalProgress,
  currentProgress,
}: SurveyProgressBarProps) => {
  return (
    <View style={tw`flex flex-row items-center gap-1.5`}>
      {Array.from({length: currentProgress}, (_, index) => index).map(value => (
        <View
          key={value}
          style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`}
        />
      ))}
      {Array.from(
        {length: totalProgress - currentProgress},
        (_, index) => index,
      ).map(value => (
        <View key={value} style={tw`h-2.5 flex-1 rounded-lg bg-custom-gray`} />
      ))}
    </View>
  );
};
