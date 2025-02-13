import TopDiscoveryKeywordList from '@src/components/discovery/TopDiscoveryKeywordList';
import { tw } from '@src/libs/tailwind';
import React from 'react';
import { View } from 'react-native';

export const DiscoveryScreen = () => {
  return (
    <View style={tw`h-full bg-white`}>
      <TopDiscoveryKeywordList />
    </View>
  );
};
