import React from 'react';
import {DiscoveryDetailViewer} from '@src/widgets/discoveryDetailViewer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/shared/model';

export function DiscoveryDetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'DiscoveryDetail'>) {
  return <DiscoveryDetailViewer recommendation={route.params.recommendation} />;
}
