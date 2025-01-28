import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Image, Modal, Pressable, Text, TextInput, View} from 'react-native';

interface MypageNicknameModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

export const MypageNicknameModal = ({
  modalVisible,
  closeModal,
}: MypageNicknameModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View
        style={tw`flex flex-1 items-center justify-center bg-black/50 px-4`}>
        <View style={tw`flex w-full flex-col rounded-2xl bg-white p-4`}>
          <Pressable
            style={({pressed}) =>
              tw.style(
                pressed && 'ios:bg-slate-100',
                'self-end rounded-2xl p-2',
              )
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('@src/assets/common/close.png')}
            />
          </Pressable>
          <Text>닉네임</Text>
          <TextInput />
        </View>
      </View>
    </Modal>
  );
};
