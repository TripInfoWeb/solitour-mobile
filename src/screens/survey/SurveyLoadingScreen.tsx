import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {useSurveyStore} from '@src/stores/surveyStore';
import {NavigationProps} from '@src/types/navigation';
import {Plan} from '@src/types/plan';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import LinearGradient from 'react-native-linear-gradient';

export const SurveyLoadingScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {days, contentCategory, contentTitles, preferredTrips} =
    useSurveyStore();

  useEffect(() => {
    (async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/travel/plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `access_token=${accessToken}`,
        },
        body: JSON.stringify({
          days,
          contentCategory,
          contentTitles,
          preferredTrips,
        }),
      });

      if (!response.ok) {
        // TODO: 수정 필요
        navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
        throw new Error('Failed to fetch data.');
      }

      const data: {plans: Plan[]} = await response.json();
      console.log(data); // TODO
      navigation.reset({
        index: 1,
        routes: [
          {name: 'BottomTabs'},
          {name: 'SurveyResultList', params: data.plans},
        ],
      });
    })();
  }, [contentCategory, contentTitles, days, navigation, preferredTrips]);

  return (
    <LinearGradient
      colors={['#FDFFFE', '#E5F5EE']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.25}}
      style={tw`flex h-full flex-col items-center justify-center gap-8`}>
      <Text style={tw`text-2xl font-bold tracking-tighter text-custom-01`}>
        맞춤 여행 만드는 중...
      </Text>
      <LottieView
        style={tw`h-48 w-48`}
        source={require('@src/assets/lottie/progress.json')}
        autoPlay={true}
        loop={true}
      />
    </LinearGradient>
  );
};
