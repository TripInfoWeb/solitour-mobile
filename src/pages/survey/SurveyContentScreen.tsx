import {useNavigation} from '@react-navigation/native';
import {BottomNextButton} from '@src/shared/ui/button';
import {tw} from '@src/shared/lib/utils/tailwind';
import {NavigationProps} from '@src/types/navigation';
import React, {Suspense} from 'react';
import {Text, View} from 'react-native';
import {ProgressBar} from '@src/shared/ui/progressBar';
import {useSurveyStore} from '@src/stores/surveyStore';
import {CONTENT_CATEGORY} from '@src/constants/contentCategory';
import {SurveyContentItemList} from '@src/components/survey/content/SurveyContentItemList';
import {SurveyContentItemListSkeleton} from '@src/components/skeleton/survey/content/SurveyContentItemListSkeleton';

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
      <Suspense fallback={<SurveyContentItemListSkeleton />}>
        <SurveyContentItemList />
      </Suspense>
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
