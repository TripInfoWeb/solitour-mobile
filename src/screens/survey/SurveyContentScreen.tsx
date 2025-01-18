import {useNavigation} from '@react-navigation/native';
import {SurveyNextButton} from '@src/components/survey/common/SurveyNextButton';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import React, {Suspense} from 'react';
import {Text, View} from 'react-native';
import {SurveyProgressBar} from '@src/components/survey/common/SurveyProgressBar';
import {useSurveyStore} from '@src/stores/surveyStore';
import {CONTENT_CATEGORY} from '@src/constants/contentCategory';
import {SurveyContentItemList} from '@src/components/survey/content/SurveyContentItemList';
import {SurveyContentItemListSkeleton} from '@src/components/skeleton/survey/content/SurveyContentItemListSkeleton';

export const SurveyContentScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {contentCategory, contentTitles} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <SurveyProgressBar totalProgress={4} currentProgress={3} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        {`어떤 ${
          CONTENT_CATEGORY.find(value => value.category === contentCategory)
            ?.title
        }의`}
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행지로 떠나볼까요?
      </Text>
      <Suspense fallback={<SurveyContentItemListSkeleton />}>
        <SurveyContentItemList />
      </Suspense>
      <SurveyNextButton
        disabled={contentTitles.length === 0}
        onPress={() => navigation.navigate('SurveyActivity')}
      />
    </View>
  );
};
