import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList} from 'react-native';
import {SurveyContentItem} from './SurveyContentItem';
import {useSurveyStore} from '@src/stores/surveyStore';
import {useSurveyContentItemList} from '@src/hooks/survey/content/useSurveyContentItemList';

export const SurveyContentItemList = () => {
  const {contentCategory, contentTitles, setSurveyState} = useSurveyStore();
  const {surveyContentList} = useSurveyContentItemList(contentCategory!);

  return (
    <FlatList
      contentContainerStyle={tw`gap-[1.125rem] pb-20`}
      columnWrapperStyle={tw`gap-2.5`}
      data={surveyContentList.content}
      renderItem={({item}) => (
        <SurveyContentItem
          title={item.mediaName}
          image={item.mediaImage}
          isActive={contentTitles[0] === item.mediaName}
          onPress={() => setSurveyState({contentTitles: [item.mediaName]})}
        />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  );
};
