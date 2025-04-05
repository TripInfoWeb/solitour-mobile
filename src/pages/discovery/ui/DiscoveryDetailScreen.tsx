import React from 'react';
import {DiscoveryDetailViewer} from '@src/widgets/discoveryDetailViewer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationList} from '@src/shared/model';

export function DiscoveryDetailScreen({
  route,
}: NativeStackScreenProps<NavigationList, 'DiscoveryDetail'>) {
  return <DiscoveryDetailViewer recommendation={route.params.recommendation} />;
}
