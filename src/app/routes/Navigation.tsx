import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ErrorBoundaryScreen} from '@src/pages/ErrorBoundaryScreen';
import {NavigationList} from '@src/shared/model';
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {BottomTabs} from './BottomTabs';
import {AuthScreen} from '@src/pages/auth/AuthScreen';
import {AuthSignInScreen} from '@src/pages/auth/AuthSignInScreen';
import {AuthLoadingScreen} from '@src/pages/auth/AuthLoadingScreen';
import {SurveyDayScreen} from '@src/pages/survey/SurveyDayScreen';
import {SurveyThemeScreen} from '@src/pages/survey/SurveyThemeScreen';
import {SurveyContentScreen} from '@src/pages/survey/SurveyContentScreen';
import {SurveyActivityScreen} from '@src/pages/survey/SurveyActivityScreen';
import {SurveyLoadingScreen} from '@src/pages/survey/SurveyLoadingScreen';
import {SurveyResultListScreen} from '@src/pages/survey/SurveyResultListScreen';
import {SurveyResultDetailScreen} from '@src/pages/survey/SurveyResultDetailScreen';
import {DiaryCreateScreen} from '@src/pages/diary/DiaryCreateScreen';
import {DiaryUpdateScreen} from '@src/pages/diary/DiaryUpdateScreen';
import {PlanDetailScreen} from '@src/pages/plan/PlanDetailScreen';
import {DiscoveryDetailScreen} from '@src/pages/discovery/DiscoveryDetailScreen';

const Stack = createNativeStackNavigator<NavigationList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShadowVisible: false}}
        // eslint-disable-next-line react/no-unstable-nested-components
        screenLayout={({children}) => (
          <ErrorBoundary fallback={<ErrorBoundaryScreen />}>
            {children}
          </ErrorBoundary>
        )}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthSignIn"
          component={AuthSignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurveyDay"
          component={SurveyDayScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyTheme"
          component={SurveyThemeScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyContent"
          component={SurveyContentScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyActivity"
          component={SurveyActivityScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyLoading"
          component={SurveyLoadingScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyResultList"
          component={SurveyResultListScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="SurveyResultDetail"
          component={SurveyResultDetailScreen}
          options={{title: '테마 여행 추천'}}
        />
        <Stack.Screen
          name="DiaryCreate"
          component={DiaryCreateScreen}
          options={{title: '여행일기'}}
        />
        <Stack.Screen
          name="DiaryUpdate"
          component={DiaryUpdateScreen}
          options={{title: '여행일기'}}
        />
        <Stack.Screen
          name="PlanDetail"
          component={PlanDetailScreen}
          options={{title: '내 여행'}}
        />
        <Stack.Screen
          name="DiscoveryDetail"
          component={DiscoveryDetailScreen}
          options={({route}) => ({
            title: route.params.name,
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
