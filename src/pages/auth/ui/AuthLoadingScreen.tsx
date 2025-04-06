import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/shared/lib/utils';
import {NavigationList, NavigationProps} from '@src/shared/model';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSignIn, useUserInfo} from '@src/entities/user';

export const AuthLoadingScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'AuthLoading'>) => {
  const navigation = useNavigation<NavigationProps>();
  const {isSuccess} = useSignIn(route.params.code);
  const {data, isError} = useUserInfo(isSuccess);

  useEffect(() => {
    if (isSuccess && isError) {
      return navigation.popToTop();
    }

    if (data?.id) {
      navigation.reset({index: 0, routes: [{name: 'BottomTabs'}]});
    }
  }, [data, isError, isSuccess, navigation]);

  return (
    <View style={tw`flex h-full flex-col items-center justify-center`}>
      <LottieView
        style={tw`h-60 w-60`}
        source={require('@assets/lottie/loading-airplane.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};
