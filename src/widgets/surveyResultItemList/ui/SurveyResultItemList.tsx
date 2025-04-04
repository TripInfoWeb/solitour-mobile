import {Plan} from '@src/entities/plan';
import React from 'react';
import {FlatList} from 'react-native';
import {SurveyResultItem} from './SurveyResultItem';

interface SurveyResultItemListProps {
  planList: Plan[];
}

export const SurveyResultItemList = ({planList}: SurveyResultItemListProps) => {
  return (
    <FlatList
      data={planList}
      renderItem={({item, index}) => (
        <SurveyResultItem index={index + 1} plan={item} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};
