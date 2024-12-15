import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationList} from './types/navigation';
import {BottomTabs} from './components/common/BottomTabs';
import {SurveyScreen} from './screens/SurveyScreen';
import {DiaryEditorScreen} from './screens/diary/DiaryEditorScreen';

const Stack = createNativeStackNavigator<NavigationList>();

export const App = () => {
  return (
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
          options={{title: '여행 일기'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
