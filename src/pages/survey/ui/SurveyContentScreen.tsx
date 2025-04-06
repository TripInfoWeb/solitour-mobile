import {useNavigation} from '@react-navigation/native';
import {BottomNextButton} from '@src/shared/ui/button';
import {tw} from '@src/shared/lib/utils';
import {NavigationProps} from '@src/shared/model';
import React from 'react';
import {Text, View} from 'react-native';
import {ProgressBar} from '@src/shared/ui/progressBar';
import {SurveyContentItemListWrapper} from '@src/widgets/surveyContentItemListWrapper';
import {CONTENT_CATEGORY, useSurveyStore} from '@src/entities/survey';

export const SurveyContentScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {contentCategory, contentTitles, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <ProgressBar totalProgress={4} currentProgress={3} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        {`어떤 ${
          CONTENT_CATEGORY.find(value => value.category === contentCategory)
            ?.title
        }의`}
      </Text>
      <Text style={tw`text-2xl font-bold text-custom-01`}>
        여행지로 떠나볼까요?
      </Text>
      <Text style={tw`pb-6 pt-1.5 text-custom-03`}>여러 개 선택 가능해요</Text>
      <SurveyContentItemListWrapper />
      <BottomNextButton
        disabled={contentTitles.length === 0}
        onPress={() => {
          setSurveyState({preferredTrips: []});
          navigation.navigate('SurveyActivity');
        }}
      />
    </View>
  );
};
