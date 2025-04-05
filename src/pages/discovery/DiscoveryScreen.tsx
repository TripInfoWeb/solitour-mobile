import {tw} from '@src/shared/lib/utils';
import {RecommendationDiscovery} from '@src/widgets/recommendationDiscovery';
import {TopDiscoveryKeywordList} from '@src/widgets/topDiscoveryKeywordList';
import React from 'react';
import {ScrollView} from 'react-native';

export const DiscoveryScreen = () => {
  return (
    <ScrollView style={tw`bg-white pb-12 pt-[1.125rem]`}>
      <TopDiscoveryKeywordList />
      <RecommendationDiscovery />
    </ScrollView>
  );
};
