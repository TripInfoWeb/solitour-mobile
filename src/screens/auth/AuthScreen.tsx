import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

export const AuthScreen = () => {
  const navigation = useNavigation<NavigationProps>();

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
