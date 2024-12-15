import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import {NavigationList} from './types/navigation';
import MypageScreen from './screens/MypageScreen';
import BottomTabs from './components/common/BottomTabs';

const Stack = createNativeStackNavigator<NavigationList>();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen name="Diary" component={DiaryScreen} />
  //       <Stack.Screen name="Mypage" component={MypageScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default App;
