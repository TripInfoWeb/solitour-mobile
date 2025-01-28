import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {useUserInfo} from '@src/hooks/auth/useUserInfo';
import {MypageNicknameModal} from './MypageNicknameModal';

export const MypageProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {data} = useUserInfo();

  return (
    <View style={tw`flex flex-col items-center pt-[3.375rem]`}>
      <MypageNicknameModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <Image
        style={tw`h-[6.75rem] w-[6.75rem] rounded-full border border-gray-200`}
        source={{uri: data?.userImage?.address}}
      />
      <Pressable
        style={({pressed}) =>
          tw.style(
            pressed && 'bg-slate-100',
            'mt-3 flex flex-row items-center gap-1',
          )
        }
        onPress={() => setModalVisible(true)}>
        <Text style={tw`text-2xl font-semibold`}>{`${data?.nickname}님`}</Text>
        <Image
          style={tw`h-5 w-5`}
          source={require('@src/assets/common/chevronRight.png')}
        />
      </Pressable>
      <Text style={tw`pt-1 text-sm font-medium text-gray-500`}>
        {data?.email}
      </Text>
    </View>
  );
};
