import {SurveyButton} from '@src/components/survey/SurveyButton';
import {SurveyNextButton} from '@src/components/survey/SurveyNextButton';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Text, View} from 'react-native';

export const SurveyThemeScreen = () => {
  return (
    <View style={tw`h-full w-full bg-white px-4 pt-10`}>
      <View style={tw`flex flex-row items-center gap-1.5`}>
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-custom-gray`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-custom-gray`} />
      </View>
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        어떤 테마의
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행을 떠나고 싶나요?
      </Text>
      <View style={tw`flex flex-col items-center gap-4`}>
        <View style={tw`flex flex-row items-center gap-2.5`}>
          <SurveyButton title="영화" />
          <SurveyButton title="드라마" />
        </View>
        <View style={tw`flex flex-row items-center gap-2.5`}>
          <SurveyButton title="K-POP" />
          <SurveyButton title="예능" />
        </View>
      </View>
      <SurveyNextButton />
    </View>
  );
};
