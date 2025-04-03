import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/shared/lib/utils/tailwind';
import {useSurveyStore} from '@src/entities/survey/model/surveyStore';
import {NavigationProps} from '@src/shared/model/navigation';
import {Plan} from '@src/entities/plan';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Alert, Text} from 'react-native';
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
        Alert.alert(
          '알림',
          '여행을 추천하기에 데이터가 부족합니다. 여러 콘텐츠를 선택해 주세요.',
          [{text: '확인'}],
        );
        return navigation.pop(2);
      }

      const data: {plans: Plan[]} = await response.json();
      navigation.reset({
        index: 1,
        routes: [
          {name: 'BottomTabs'},
          {name: 'SurveyResultList', params: {plans: data.plans}},
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
