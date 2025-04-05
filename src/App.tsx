import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Image, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {BottomTabs} from './app/ui/BottomTabs';
import {DiscoveryDetailScreen} from './pages/discovery/DiscoveryDetailScreen';
import {tw} from './shared/lib/utils/tailwind';
import {ErrorBoundaryScreen} from './pages/ErrorBoundaryScreen';
import {AuthLoadingScreen} from './pages/auth/AuthLoadingScreen';
import {AuthScreen} from './pages/auth/AuthScreen';
import {AuthSignInScreen} from './pages/auth/AuthSignInScreen';
import {DiaryCreateScreen} from './pages/diary/DiaryCreateScreen';
import {DiaryUpdateScreen} from './pages/diary/DiaryUpdateScreen';
import {SurveyActivityScreen} from './pages/survey/SurveyActivityScreen';
import {SurveyContentScreen} from './pages/survey/SurveyContentScreen';
import {SurveyDayScreen} from './pages/survey/SurveyDayScreen';
import {SurveyLoadingScreen} from './pages/survey/SurveyLoadingScreen';
import {SurveyResultDetailScreen} from './pages/survey/SurveyResultDetailScreen';
import {SurveyResultListScreen} from './pages/survey/SurveyResultListScreen';
import {SurveyThemeScreen} from './pages/survey/SurveyThemeScreen';
import {PlanDetailScreen} from './pages/plan/PlanDetailScreen';
import {NavigationList} from './shared/model/navigation';

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
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
