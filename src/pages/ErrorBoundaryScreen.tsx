import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/shared/lib/utils/tailwind';
import {NavigationProps} from '@src/shared/model/navigation';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

export const ErrorBoundaryScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={tw`flex h-full flex-col items-center justify-center bg-white`}>
      <Image
        style={tw`h-40 w-52`}
        source={require('@src/assets/common/error-sign.png')}
      />
      <Text style={tw`pb-1 pt-4 text-lg font-bold text-custom-01`}>
        시스템에 오류가 발생하였습니다.
      </Text>
      <Text style={tw`text-custom-03`}>잠시 후에 다시 시도해 주세요.</Text>
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'bg-primary-green-ripple' : 'bg-primary-green',
            'mt-4 flex h-10 w-28 flex-col justify-center rounded-full',
          ])
        }
        onPress={() => navigation.reset({index: 0, routes: [{name: 'Auth'}]})}>
        <Text style={tw`text-center text-white`}>홈으로</Text>
      </Pressable>
    </View>
  );
};
