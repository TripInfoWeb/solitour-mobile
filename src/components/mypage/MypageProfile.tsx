import React from 'react';
import {Image, Text, View} from 'react-native';
import {tw} from '../../libs/tailwind';

export const MypageProfile = () => {
  return (
    <View style={tw`flex flex-col items-center pt-[3.375rem]`}>
      <Image
        style={tw`h-[6.75rem] w-[6.75rem]`}
        source={require('../../assets/mypage/man.png')}
      />
      <View style={tw`flex flex-row items-center gap-1 pt-3`}>
        <Text style={tw`text-2xl font-semibold`}>OO님</Text>
        <Image
          style={tw`h-5 w-5`}
          source={require('../../assets/common/chevronRight.png')}
        />
      </View>
      <Text style={tw`pt-1 text-sm font-medium text-gray-500`}>
        sola240@gmail.com
      </Text>
    </View>
  );
};
