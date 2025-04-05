import {useModal} from '@src/shared/lib/hooks';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {NicknameModal} from './NicknameModal';

interface NicknameEditorProps {
  nickname: string;
}

export const NicknameEditor = ({nickname}: NicknameEditorProps) => {
  const {isOpen, openModal, closeModal} = useModal();

  return (
    <View>
      <NicknameModal
        nickname={nickname}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Pressable
        style={({pressed}) =>
          tw.style(
            pressed && 'bg-slate-100',
            'mt-3 flex flex-row items-center gap-1',
          )
        }
        onPress={openModal}>
        <Text style={tw`text-2xl font-semibold`}>{`${nickname}님`}</Text>
        <Image
          style={tw`h-5 w-5`}
          source={require('@assets/common/chevronRight.png')}
        />
      </Pressable>
    </View>
  );
};
