import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiscoveryStackList} from '@src/shared/model';
import {DiscoveryDetailViewer} from '@src/widgets/discoveryDetailViewer';

const Discovery = createNativeStackNavigator<DiscoveryStackList>();

export function DiscoveryStack() {
  return (
    <Discovery.Navigator>
      <Discovery.Screen
        name="DiscoveryDetail"
        component={DiscoveryDetailViewer}
        options={({route}) => ({
          title:
            (route.params as {recommendation: IDiscoveryRecommendationItem})
              ?.recommendation.title ?? '기본 제목',
          headerShown: true,
        })}
      />
    </Discovery.Navigator>
  );
}
