import React from 'react';
import {Image, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {useUserInfo} from '@src/hooks/auth/useUserInfo';

export const MypageProfile = () => {
  const {data} = useUserInfo();

  return (
    <View style={tw`flex flex-col items-center pt-[3.375rem]`}>
      <Image
        style={tw`h-[6.75rem] w-[6.75rem] rounded-full border border-gray-200`}
        source={{uri: data?.userImage?.address}}
      />
      <View style={tw`flex flex-row items-center gap-1 pt-3`}>
        <Text style={tw`text-2xl font-semibold`}>{`${data?.nickname}님`}</Text>
        <Image
          style={tw`h-5 w-5`}
          source={require('@src/assets/common/chevronRight.png')}
        />
      </View>
      <Text style={tw`pt-1 text-sm font-medium text-gray-500`}>
        {data?.email}
      </Text>
    </View>
  );
};
