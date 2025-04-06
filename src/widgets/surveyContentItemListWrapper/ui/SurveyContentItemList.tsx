import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {FlatList, Text} from 'react-native';
import {SurveyContentItem, useSurveyStore} from '@src/entities/survey';
import {SurveyContentSearchbar} from './SurveyContentSearchbar';
import {FormProvider} from 'react-hook-form';
import {useSurveyContentItemList} from '../model/useSurveyContentItemList';

export const SurveyContentItemList = () => {
  const {contentCategory, contentTitles, setSurveyState} = useSurveyStore();
  const {surveyContentList, methods} = useSurveyContentItemList(
    contentCategory!,
  );

  return (
    <FormProvider {...methods}>
      <SurveyContentSearchbar />
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={surveyContentList}
        renderItem={({item}) => (
          <SurveyContentItem
            title={item.mediaName}
            image={item.mediaImage}
            isActive={contentTitles.includes(item.mediaName)}
            onPress={() => {
              if (contentTitles.includes(item.mediaName)) {
                setSurveyState({
                  contentTitles: contentTitles.filter(
                    contentTitle => contentTitle !== item.mediaName,
                  ),
                });
              } else {
                setSurveyState({
                  contentTitles: [...contentTitles, item.mediaName],
                });
              }
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListEmptyComponent={
          <Text style={tw`text-center`}>검색 결과가 없습니다.</Text>
        }
      />
    </FormProvider>
  );
};
