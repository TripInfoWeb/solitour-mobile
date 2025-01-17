import {useNavigation} from '@react-navigation/native';
import {SurveyContentItem} from '@src/components/survey/content/SurveyContentItem';
import {SurveyNextButton} from '@src/components/survey/common/SurveyNextButton';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SurveyProgressBar} from '@src/components/survey/common/SurveyProgressBar';
import {useSurveyStore} from '@src/stores/surveyStore';
import {CONTENT_CATEGORY} from '@src/constants/contentCategory';

export const SurveyContentScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {contentCategory, contentTitles, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <SurveyProgressBar totalProgress={3} currentProgress={2} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        {`어떤 ${
          CONTENT_CATEGORY.find(value => value.category === contentCategory)
            ?.title
        }의`}
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행지로 떠나볼까요?
      </Text>
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={['나 혼자 산다', '런닝맨', '전현무계획', '독박투어']}
        renderItem={({item}) => (
          <SurveyContentItem
            title={item}
            isActive={contentTitles[0] === item}
            onPress={() => setSurveyState({contentTitles: [item]})}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />
      <SurveyNextButton
        disabled={contentTitles.length === 0}
        onPress={() => navigation.navigate('SurveyActivity')}
      />
    </View>
  );
};
