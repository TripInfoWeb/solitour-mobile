import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/libs/tailwind';
import {NavigationList, NavigationProps} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSignIn} from '@src/hooks/auth/useSignIn';
import {useUserInfo} from '@src/hooks/auth/useUserInfo';

export const AuthLoadingScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'AuthLoading'>) => {
  const navigation = useNavigation<NavigationProps>();
  const {isLoading, isError} = useSignIn(route.params.code);
  const {data} = useUserInfo(!isLoading && !isError);

  useEffect(() => {
    if (data) {
      navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
    }
  }, [data, navigation]);

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
