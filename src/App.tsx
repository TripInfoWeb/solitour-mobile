import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationList} from './types/navigation';
import {BottomTabs} from './components/common/BottomTabs';
import {SurveyThemeScreen} from './screens/survey/SurveyThemeScreen';
import {DiaryEditorScreen} from './screens/diary/DiaryEditorScreen';
import {Pressable, Text} from 'react-native';
import {tw} from './libs/tailwind';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {SurveyContentScreen} from './screens/survey/SurveyContentScreen';
import {SurveyActivityScreen} from './screens/survey/SurveyActivityScreen';
import {SurveyLoadingScreen} from './screens/survey/SurveyLoadingScreen';

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
        <Stack.Navigator
          initialRouteName="BottomTabs"
          screenOptions={{headerShadowVisible: false}}>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SurveyTheme"
            component={SurveyThemeScreen}
            options={{title: 'AI 콘텐츠 여행 추천'}}
          />
          <Stack.Screen
            name="SurveyContent"
            component={SurveyContentScreen}
            options={{title: 'AI 콘텐츠 여행 추천'}}
          />
          <Stack.Screen
            name="SurveyActivity"
            component={SurveyActivityScreen}
            options={{title: 'AI 콘텐츠 여행 추천'}}
          />
          <Stack.Screen
            name="SurveyLoading"
            component={SurveyLoadingScreen}
            options={{title: 'AI 콘텐츠 여행 추천'}}
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
