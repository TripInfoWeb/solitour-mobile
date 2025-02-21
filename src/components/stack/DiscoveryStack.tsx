// navigation/DiscoveryDiscoveryStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoveryStackList } from '@src/types/navigation';
import DiscoveryDetail from '../discovery/DiscoveryDetail';

const Discovery = createNativeStackNavigator<DiscoveryStackList>();

export function DiscoveryStack() {
  return (
    <Discovery.Navigator>
      <Discovery.Screen
        name="DiscoveryDetail"
        component={DiscoveryDetail}
        options={({route}) => ({
          title:
            (route.params as {recommendation: IDiscoveryRecommendationItem})?.recommendation.title ??
            '기본 제목',
          headerShown: true,
        })}
      />
    </Discovery.Navigator>
  );
}
