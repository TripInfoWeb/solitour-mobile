import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationList} from './types/navigation';
import {BottomTabs} from './components/common/BottomTabs';
import {SurveyScreen} from './screens/SurveyScreen';
import {DiaryEditorScreen} from './screens/diary/DiaryEditorScreen';
import {Pressable, Text} from 'react-native';
import {tw} from './libs/tailwind';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

const DiaryRegisterButton = () => {
  return (
    <Pressable
      style={({pressed}) => {
        return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
      }}>
      <Text style={tw`font-semibold text-primary-green`}>등록</Text>
    </Pressable>
  );
};

const Stack = createNativeStackNavigator<NavigationList>();

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTabs">
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Survey"
            component={SurveyScreen}
            options={{title: '여행 설문조사'}}
          />
          <Stack.Screen
            name="DiaryEditor"
            component={DiaryEditorScreen}
            options={{title: '여행일기', headerRight: DiaryRegisterButton}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
