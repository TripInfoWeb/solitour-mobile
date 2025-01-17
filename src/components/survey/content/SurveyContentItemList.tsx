import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList} from 'react-native';
import {SurveyContentItem} from './SurveyContentItem';
import {useSurveyStore} from '@src/stores/surveyStore';
import {useSuspenseQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';
import {BACKEND_URL} from '@env';
import {SurveyContentList} from '@src/types/survey';

export const SurveyContentItemList = () => {
  const {contentCategory, contentTitles, setSurveyState} = useSurveyStore();
  const {data} = useSuspenseQuery<SurveyContentList>({
    queryKey: ['surveyContentItemList', contentCategory],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(
        `${BACKEND_URL}/api/media?type=${contentCategory}&page=0&size=8`,
        {
          method: 'GET',
          headers: {Cookie: `access_token=${accessToken}`},
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      return await response.json();
    },
    staleTime: 600000,
    gcTime: 1800000,
    retry: false,
  });

  return (
    <FlatList
      contentContainerStyle={tw`gap-[1.125rem] pb-20`}
      columnWrapperStyle={tw`gap-2.5`}
      data={data.content}
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
