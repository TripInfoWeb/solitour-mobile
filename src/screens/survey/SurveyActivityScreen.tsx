import {SurveyButton} from '@src/components/survey/SurveyButton';
import {SurveyNextButton} from '@src/components/survey/SurveyNextButton';
import {tw} from '@src/libs/tailwind';
import React, {useState} from 'react';
import {Text, View} from 'react-native';

export const SurveyActivityScreen = () => {
  const [activity, setActivity] = useState<
    | 'CULTURAL_FACILITY'
    | 'NOVELTY_EXPERIENCE'
    | 'NATURAL_PLACE'
    | 'HISTORICAL_PLACE'
    | 'MARKET'
    | null
  >(null);

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-10`}>
      <View style={tw`flex flex-row items-center gap-1.5`}>
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
      </View>
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>여행에서</Text>
      <Text style={tw`text-2xl font-bold text-custom-01`}>
        무엇을 하고 싶나요?
      </Text>
      <Text style={tw`pb-12 pt-1.5 text-custom-03`}>
        최대 4개 선택 가능해요
      </Text>
      <View style={tw`flex flex-col items-center gap-4`}>
        <View style={tw`flex flex-row items-center gap-2.5`}>
          <SurveyButton
            title="문화시설"
            isActive={activity === 'CULTURAL_FACILITY'}
            onPress={() => setActivity('CULTURAL_FACILITY')}
          />
          <SurveyButton
            title="이색체험"
            isActive={activity === 'NOVELTY_EXPERIENCE'}
            onPress={() => setActivity('NOVELTY_EXPERIENCE')}
          />
        </View>
        <View style={tw`flex flex-row items-center gap-2.5`}>
          <SurveyButton
            title="자연관광지"
            isActive={activity === 'NATURAL_PLACE'}
            onPress={() => setActivity('NATURAL_PLACE')}
          />
          <SurveyButton
            title="역사관광지"
            isActive={activity === 'HISTORICAL_PLACE'}
            onPress={() => setActivity('HISTORICAL_PLACE')}
          />
        </View>
        <View style={tw`flex flex-row items-center gap-2.5`}>
          <SurveyButton
            title="시장"
            isActive={activity === 'MARKET'}
            onPress={() => setActivity('MARKET')}
          />
          <View style={tw`flex-1`} />
        </View>
      </View>
      <SurveyNextButton disabled={activity === null} />
    </View>
  );
};
