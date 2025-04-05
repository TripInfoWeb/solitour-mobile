import {useNetInfo} from '@react-native-community/netinfo';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Image, Text, View} from 'react-native';

interface NetInfoProviderProps {
  children?: React.ReactNode;
}

export const NetInfoProvider = ({children}: NetInfoProviderProps) => {
  const {isConnected} = useNetInfo();

  if (isConnected === false) {
    return (
      <View style={tw`flex h-full flex-col items-center justify-center`}>
        <Image
          style={tw`h-40 w-40`}
          source={require('@src/assets/common/disconnection.png')}
        />
        <Text style={tw`pb-1 pt-4 text-lg font-bold text-custom-01`}>
          인터넷에 연결되어 있지 않습니다.
        </Text>
        <Text style={tw`text-custom-03`}>연결 상태를 다시 확인해 주세요.</Text>
      </View>
    );
  }

  return children;
};
