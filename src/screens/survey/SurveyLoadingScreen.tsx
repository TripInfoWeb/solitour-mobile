import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const SurveyLoadingScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  // TODO: 수정 필요
  useEffect(() => {
    setTimeout(
      () =>
        navigation.reset({
          index: 1,
          routes: [{name: 'BottomTabs'}, {name: 'SurveyResultList'}],
        }),
      1000,
    );
  }, [navigation]);

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
