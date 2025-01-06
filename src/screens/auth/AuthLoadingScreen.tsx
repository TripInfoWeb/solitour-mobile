import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/libs/tailwind';
import {NavigationList, NavigationProps} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {BACKEND_URL, KAKAO_REDIRECT_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthLoadingScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'AuthLoading'>) => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const code = route.params.code;

    (async () => {
      const response = await fetch(
        `${BACKEND_URL}/api/auth/oauth2/login?type=kakao&redirectUrl=${KAKAO_REDIRECT_URL}&code=${code}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      if (!response.ok) {
        navigation.popToTop();
        return;
      }

      const cookies = response.headers.get('set-cookie')?.split(',');
      if (cookies) {
        for (const cookie of cookies) {
          const [key, value] = cookie
            .split(';')[0]
            .split('=')
            .map(str => str.trim());

          await EncryptedStorage.setItem(key, value);
        }
      }

      navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
    })();
  }, [navigation, route.params.code]);

  return (
    <View style={tw`flex h-full flex-col items-center justify-center`}>
      <LottieView
        style={tw`h-60 w-60`}
        source={require('@src/assets/lottie/loading-airplane.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};
