import React from 'react';
import {DiscoveryDetailViewer} from '@src/widgets/discoveryDetailViewer';

export function DiscoveryDetailScreen({
  route,
}: RootStackScreenProps<'DiscoveryDetail'>) {
  return <DiscoveryDetailViewer recommendation={route.params.recommendation} />;
}
