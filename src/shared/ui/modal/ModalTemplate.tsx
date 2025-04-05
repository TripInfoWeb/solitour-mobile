import {COLOR} from '@src/shared/config';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Image, Modal, Pressable, Text, View} from 'react-native';

interface ModalTemplateProps {
  children: React.ReactNode;
  title: string;
  visible: boolean;
  closeModal: () => void;
}

export const ModalTemplate = ({
  children,
  title,
  visible,
  closeModal,
}: ModalTemplateProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => closeModal()}>
      <View
        style={tw`flex flex-1 items-center justify-center bg-black/50 px-4`}>
        <View
          style={tw`flex w-full flex-col items-center rounded-2xl bg-white p-4`}>
          <View style={tw`flex w-full flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-bold`}>{title}</Text>
            <Pressable
              style={({pressed}) =>
                tw.style(pressed && 'ios:bg-slate-100', 'rounded-2xl p-2')
              }
              android_ripple={{color: COLOR.GRAY_RIPPLE}}
              onPress={() => closeModal()}>
              <Image
                style={tw`h-4 w-4`}
                source={require('@assets/common/close.png')}
              />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};
