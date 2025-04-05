import {useNavigation} from '@react-navigation/native';
import {COLOR} from '@src/shared/config';
import {useUserInfo} from '@src/entities/user';
import {tw} from '@src/shared/lib/utils';
import {NavigationProps} from '@src/shared/model';
import {useQueryClient} from '@tanstack/react-query';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';

export const AuthScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {data, isLoading} = useUserInfo();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.id) {
      navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
    }
  }, [data?.id, navigation]);

  if (data?.id || isLoading) {
    return (
      <ActivityIndicator
        style={tw`h-full bg-white`}
        size={50}
        color={COLOR.PRIMARY_GREEN}
      />
    );
  }

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
        source={require('@assets/lottie/solitour-auth-intro-image.json')}
        autoPlay={true}
        loop={true}
      />
      <Image
        style={tw`h-[7.375rem] w-[11.375rem]`}
        source={require('@assets/auth/solitour-auth-intro-image.png')}
      />
      <Pressable
        style={({pressed}) =>
          tw.style(
            pressed ? 'bg-yellow-200' : 'bg-[#FEE500]',
            'relative mt-24 flex h-12 w-full flex-row items-center rounded-full',
          )
        }
        onPress={() => {
          queryClient.removeQueries();
          navigation.navigate('AuthSignIn');
        }}>
        <Image
          style={tw`absolute left-2 h-10 w-10`}
          source={require('@assets/auth/kakao-logo.png')}
        />
        <Text style={tw`w-full text-center text-sm text-custom-01`}>
          카카오로 로그인
        </Text>
      </Pressable>
    </View>
  );
};
