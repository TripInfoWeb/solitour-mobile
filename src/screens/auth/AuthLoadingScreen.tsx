import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';

export const AuthLoadingScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'AuthLoading'>) => {
  return (
    <View style={tw`flex h-full flex-col items-center justify-center`}>
      {/* <Text>{route.params.code}</Text> */}
      <LottieView
        style={tw`h-60 w-60`}
        source={require('@src/assets/lottie/loading-airplane.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};
