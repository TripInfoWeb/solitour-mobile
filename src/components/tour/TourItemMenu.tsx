import {BACKEND_URL} from '@env';
import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, Alert, Image, Pressable, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

interface TourItemMenuProps {
  planId: number;
  planTitle: string;
}

export const TourItemMenu = ({planId, planTitle}: TourItemMenuProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(
        `${BACKEND_URL}/api/travel/user-plan/${planId}`,
        {
          method: 'DELETE',
          headers: {
            Cookie: `access_token=${accessToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to delete.');
      }

      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tourItemList']});
    },
    throwOnError: true,
  });

  const handleDeleteButtonClick = () => {
    Alert.alert(`${planTitle} 삭제`, '정말 삭제하시겠습니까?', [
      {text: '취소'},
      {
        text: 'TODO', // TODO: "삭제"
        onPress: () => {
          // mutation.mutate();
        },
      },
    ]);
  };

  return (
    <View style={tw`relative`}>
      {mutation.isPending ? (
        <ActivityIndicator style={tw`h-8 w-8`} color={COLOR.PRIMARY_GREEN} />
      ) : (
        <Pressable
          style={({pressed}) =>
            tw.style(pressed ? 'bg-slate-100' : '', 'rounded-lg p-2')
          }
          onPress={() => handleDeleteButtonClick()}>
          <Image
            style={tw`h-4 w-4`}
            source={require('@src/assets/common/delete-icon.png')}
          />
        </Pressable>
      )}
    </View>
  );
};
