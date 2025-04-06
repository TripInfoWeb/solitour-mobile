import React from 'react';
import {Image, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {MypageProfile} from '@src/widgets/myPageProfile';
import {useUserInfo} from '@src/entities/user';
import {MypageItem} from './MypageItem';
import {tw} from '@src/shared/lib/utils';

export const MypageScreen = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {data} = useUserInfo();

  const handleSignOut = async () => {
    await EncryptedStorage.clear();
    queryClient.removeQueries();
    navigation.reset({index: 0, routes: [{name: 'Auth'}]});
  };

  return (
    <View style={tw`flex h-full flex-col items-center bg-white px-4`}>
      <MypageProfile />
      <View style={tw`pt-6`}>
        <MypageItem title="연동 계정">
          <Text style={tw`text-custom-03`}>{data?.provider}</Text>
        </MypageItem>
        <MypageItem title="앱 버전">
          <Text style={tw`text-custom-03`}>버전 1.0.0</Text>
        </MypageItem>
        <MypageItem title="로그아웃" onPress={() => handleSignOut()}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@assets/common/chevronRight.png')}
          />
        </MypageItem>
        <View style={tw`h-16 flex-row items-center`}>
          <Text style={tw`text-sm text-custom-disabled underline`}>
            회원 탈퇴
          </Text>
        </View>
      </View>
    </View>
  );
};
