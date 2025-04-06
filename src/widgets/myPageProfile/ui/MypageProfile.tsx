import React from 'react';
import {Image, Text, View} from 'react-native';
import {useUserInfo} from '@src/entities/user';
import {tw} from '@src/shared/lib/utils';
import {NicknameEditor} from '@src/features/nicknameEditor';

export const MypageProfile = () => {
  const {data} = useUserInfo();

  return (
    <View style={tw`flex flex-col items-center pt-[3.375rem]`}>
      <Image
        style={tw`h-[6.75rem] w-[6.75rem] rounded-full border border-gray-200`}
        source={{uri: data?.userImage?.address}}
      />
      <NicknameEditor nickname={data?.nickname ?? ''} />
      <Text style={tw`pt-1 text-sm font-medium text-gray-500`}>
        {data?.email}
      </Text>
    </View>
  );
};
