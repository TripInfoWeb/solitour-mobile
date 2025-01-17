import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationList} from './types/navigation';
import {BottomTabs} from './components/common/BottomTabs';
import {SurveyThemeScreen} from './screens/survey/SurveyThemeScreen';
import {DiaryEditorScreen} from './screens/diary/DiaryEditorScreen';
import {Image, Text, View} from 'react-native';
import {tw} from './libs/tailwind';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {SurveyContentScreen} from './screens/survey/SurveyContentScreen';
import {SurveyActivityScreen} from './screens/survey/SurveyActivityScreen';
import {SurveyLoadingScreen} from './screens/survey/SurveyLoadingScreen';
import {SurveyResultListScreen} from './screens/survey/SurveyResultListScreen';
import {SurveyResultDetailScreen} from './screens/survey/SurveyResultDetailScreen';
import {AuthScreen} from './screens/auth/AuthScreen';
import {AuthSignInScreen} from './screens/auth/AuthSignInScreen';
import {AuthLoadingScreen} from './screens/auth/AuthLoadingScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useNetInfo} from '@react-native-community/netinfo';
import {ErrorBoundary} from 'react-error-boundary';
import {ErrorBoundaryScreen} from './screens/ErrorBoundaryScreen';
import {DiaryUpdateScreen} from './screens/diary/DiaryUpdateScreen';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<NavigationList>();

export const App = () => {
  const {isConnected} = useNetInfo();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (isConnected === false) {
    return (
      <View style={tw`flex h-full flex-col items-center justify-center`}>
        <Image
          style={tw`h-40 w-40`}
          source={require('@src/assets/common/disconnection.png')}
        />
        <Text style={tw`pb-1 pt-4 text-lg font-bold text-custom-01`}>
          인터넷에 연결되어 있지 않습니다.
        </Text>
        <Text style={tw`text-custom-03`}>연결 상태를 다시 확인해 주세요.</Text>
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
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
              name="SurveyResultList"
              component={SurveyResultListScreen}
              options={{title: 'AI 콘텐츠 여행 추천'}}
            />
            <Stack.Screen
              name="SurveyResultDetail"
              component={SurveyResultDetailScreen}
              options={{title: 'AI 콘텐츠 여행 추천'}}
            />
            <Stack.Screen
              name="DiaryEditor"
              component={DiaryEditorScreen}
              options={{title: '여행일기'}}
            />
            <Stack.Screen
              name="DiaryUpdate"
              component={DiaryUpdateScreen}
              options={{title: '여행일기'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
