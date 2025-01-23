import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SurveyResultItem} from '@src/components/survey/result/list/SurveyResultItem';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import React from 'react';
import {FlatList, View} from 'react-native';

export const SurveyResultListScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'SurveyResultList'>) => {
  return (
    <View style={tw`flex h-full flex-col gap-6 bg-[#F3F3F3] px-4`}>
      <FlatList
        data={route.params.plans}
        renderItem={({item, index}) => (
          <SurveyResultItem index={index + 1} plan={item} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
