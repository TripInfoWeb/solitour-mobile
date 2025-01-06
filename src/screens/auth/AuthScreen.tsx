import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {useAuthStore} from '@src/stores/authStore';
import {NavigationProps} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const authStore = useAuthStore();

  useEffect(() => {
    (async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const userInfoResponse = await fetch(`${BACKEND_URL}/api/users/info`, {
        method: 'GET',
        headers: {
          Cookie: `access_token=${accessToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!userInfoResponse.ok) {
        await EncryptedStorage.clear();
        return;
      }

      const userData = await userInfoResponse.json();
      authStore.setAuthState(userData);
      navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
    })();
  }, [authStore, navigation]);

  return (
    <View
      style={tw`flex h-full w-full flex-col items-center justify-center px-4`}>
      <Text style={tw`text-center text-2xl font-bold text-custom-01`}>
        TV 속 핫플로 나만의 여행!
      </Text>
      <Text style={tw`text-center text-2xl font-bold text-custom-01`}>
        이제 솔리투어에서 시작하세요
      </Text>
      <LottieView
        style={tw`-mb-44 h-80 w-80`}
        source={require('@src/assets/lottie/solitour-auth-intro-image.json')}
        autoPlay={true}
        loop={true}
      />
      <Image
        style={tw`h-[7.375rem] w-[11.375rem]`}
        source={require('@src/assets/auth/solitour-auth-intro-image.png')}
      />
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'bg-yellow-200' : 'bg-[#FEE500]',
            'relative mt-24 flex h-12 w-full flex-row items-center rounded-full',
          ])
        }
        onPress={() => navigation.navigate('AuthSignIn')}>
        <Image
          style={tw`absolute left-2 h-10 w-10`}
          source={require('@src/assets/auth/kakao-logo.png')}
        />
        <Text style={tw`w-full text-center text-sm text-custom-01`}>
          카카오로 로그인
        </Text>
      </Pressable>
    </View>
  );
};
