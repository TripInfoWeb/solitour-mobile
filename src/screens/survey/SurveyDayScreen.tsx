import {useNavigation} from '@react-navigation/native';
import {SurveyButton} from '@src/components/survey/common/SurveyButton';
import {SurveyNextButton} from '@src/components/survey/common/SurveyNextButton';
import {SurveyProgressBar} from '@src/components/survey/common/SurveyProgressBar';
import {tw} from '@src/libs/tailwind';
import {useSurveyStore} from '@src/stores/surveyStore';
import {NavigationProps} from '@src/types/navigation';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

export const SurveyDayScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {days, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <SurveyProgressBar totalProgress={4} currentProgress={1} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        얼마나 오랫동안
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행을 떠나고 싶나요?
      </Text>
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={Array.from({length: 30}, (_, index) => index + 1)}
        renderItem={({item}) => (
          <SurveyButton
            title={`${item}일`}
            isActive={item === days}
            onPress={() => setSurveyState({days: item})}
          />
        )}
        keyExtractor={item => item.toString()}
        numColumns={3}
      />
      <SurveyNextButton
        disabled={days === 0}
        onPress={() => navigation.navigate('SurveyTheme')}
      />
    </View>
  );
};
