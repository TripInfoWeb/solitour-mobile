import {COLOR} from '@src/shared/config/color';
import {useNicknameModal} from '@src/hooks/mypage/useNicknameModal';
import {tw} from '@src/shared/lib/utils/tailwind';
import React from 'react';
import {Controller} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

interface MypageNicknameModalProps {
  nickname: string;
  modalVisible: boolean;
  closeModal: () => void;
}

export const MypageNicknameModal = ({
  nickname,
  modalVisible,
  closeModal,
}: MypageNicknameModalProps) => {
  const {methods, isPending, handleSubmit} = useNicknameModal(
    nickname,
    modalVisible,
    closeModal,
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => closeModal()}>
      <View
        style={tw`flex flex-1 items-center justify-center bg-black/50 px-4`}>
        <View
          style={tw`flex w-full flex-col items-center rounded-2xl bg-white p-4`}>
          <View style={tw`flex w-full flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-bold`}>닉네임 변경</Text>
            <Pressable
              style={({pressed}) =>
                tw.style(pressed && 'ios:bg-slate-100', 'rounded-2xl p-2')
              }
              android_ripple={{color: COLOR.GRAY_RIPPLE}}
              onPress={() => closeModal()}>
              <Image
                style={tw`h-4 w-4`}
                source={require('@src/assets/common/close.png')}
              />
            </Pressable>
          </View>
          <Controller
            name="nickname"
            control={methods.control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={tw.style(
                  methods.formState.errors.nickname
                    ? 'border-blue-500'
                    : 'border-custom-04',
                  'my-4 h-[3.25rem] w-full rounded-full border px-4',
                )}
                placeholderTextColor={
                  methods.formState.errors.nickname && COLOR.BLUE
                }
                placeholder="닉네임을 입력해 주세요."
                onChangeText={onChange}
                value={value}
                maxLength={30}
              />
            )}
          />
          <View style={tw`flex flex-row items-center gap-2`}>
            <Pressable
              style={({pressed}) =>
                tw.style(
                  pressed ? 'bg-slate-100' : 'bg-white',
                  'flex h-10 w-28 justify-center rounded-full border border-slate-200 shadow',
                )
              }
              onPress={() => closeModal()}>
              <Text style={tw`text-center text-sm font-semibold`}>취소</Text>
            </Pressable>
            <Pressable
              style={({pressed}) =>
                tw.style(
                  pressed ? 'bg-primary-green-ripple' : 'bg-primary-green',
                  'flex h-10 w-28 justify-center rounded-full shadow',
                )
              }
              disabled={isPending}
              onPress={() => handleSubmit()}>
              {isPending ? (
                <ActivityIndicator color={COLOR.WHITE} />
              ) : (
                <Text style={tw`text-center text-sm font-semibold text-white`}>
                  변경
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
