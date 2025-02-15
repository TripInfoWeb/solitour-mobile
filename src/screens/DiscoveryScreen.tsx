import TopDiscoveryKeywordList from '@src/components/discovery/TopDiscoveryKeywordList';
import { tw } from '@src/libs/tailwind';
import React from 'react';
import { ScrollView } from 'react-native';

export const DiscoveryScreen = () => {
  return (
    <ScrollView  style={tw`bg-white`}>
      <TopDiscoveryKeywordList />
    </ScrollView >
  );
};
