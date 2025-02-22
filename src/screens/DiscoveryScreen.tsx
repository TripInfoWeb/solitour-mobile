import RecommendationDiscovery from '@src/components/discovery/RecommendationDiscovery';
import TopDiscoveryKeywordList from '@src/components/discovery/TopDiscoveryKeywordList';
import { tw } from '@src/libs/tailwind';
import React from 'react';
import { ScrollView, View } from 'react-native';

export const DiscoveryScreen = () => {
  return (
    <View style={tw`bg-white pb-[3rem] pt-[1.125rem]`}>
      <ScrollView>
        <TopDiscoveryKeywordList />
        <RecommendationDiscovery />
      </ScrollView>
    </View>
  );
};
