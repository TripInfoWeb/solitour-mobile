// navigation/DiscoveryDiscoveryStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoveryDetail from '../discovery/DiscoveryDetail';

const Discovery = createNativeStackNavigator();

export function DiscoveryStack() {
  return (
    <Discovery.Navigator>
      <Discovery.Screen
        name="DiscoveryDetail"
        component={DiscoveryDetail}
        options={({route}) => ({
          title:
            (route.params as {recommendation: IRecommendation})?.recommendation.title ??
            '기본 제목',
          headerShown: true,
        })}
      />
    </Discovery.Navigator>
  );
}
