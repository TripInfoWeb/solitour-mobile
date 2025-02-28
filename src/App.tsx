import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Image, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { BottomTabs } from './components/common/BottomTabs';
import { DiscoveryStack } from './components/stack/DiscoveryStack';
import { tw } from './libs/tailwind';
import { ErrorBoundaryScreen } from './screens/ErrorBoundaryScreen';
import { AuthLoadingScreen } from './screens/auth/AuthLoadingScreen';
import { AuthScreen } from './screens/auth/AuthScreen';
import { AuthSignInScreen } from './screens/auth/AuthSignInScreen';
import { DiaryEditorScreen } from './screens/diary/DiaryEditorScreen';
import { DiaryUpdateScreen } from './screens/diary/DiaryUpdateScreen';
import { SurveyActivityScreen } from './screens/survey/SurveyActivityScreen';
import { SurveyContentScreen } from './screens/survey/SurveyContentScreen';
import { SurveyDayScreen } from './screens/survey/SurveyDayScreen';
import { SurveyLoadingScreen } from './screens/survey/SurveyLoadingScreen';
import { SurveyResultDetailScreen } from './screens/survey/SurveyResultDetailScreen';
import { SurveyResultListScreen } from './screens/survey/SurveyResultListScreen';
import { SurveyThemeScreen } from './screens/survey/SurveyThemeScreen';
import { TourDetailScreen } from './screens/tour/TourDetailScreen';
import { NavigationList } from './types/navigation';

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
              name="DiaryEditor"
              component={DiaryEditorScreen}
              options={{title: '여행일기'}}
            />
            <Stack.Screen
              name="DiaryUpdate"
              component={DiaryUpdateScreen}
              options={{title: '여행일기'}}
            />
            <Stack.Screen
              name="TourDetail"
              component={TourDetailScreen}
              options={{title: '내 여행'}}
            />
            <Stack.Screen
              name="DiscoveryStack"
              component={DiscoveryStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
