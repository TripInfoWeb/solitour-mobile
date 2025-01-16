import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

interface DiaryCardMenuProps {
  diaryId: number;
}

export const DiaryCardMenu = ({diaryId}: DiaryCardMenuProps) => {
  const navigation = useNavigation<NavigationProps>();
  const [visible, setVisible] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/diary/${diaryId}`, {
        method: 'DELETE',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete.');
      }

      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['diaryList']});
    },
    throwOnError: true,
  });

  const handleDeleteButtonClick = () => {
    Alert.alert('여행일기 삭제', '정말 삭제하시겠습니까?', [
      {text: '취소'},
      {
        text: '삭제',
        onPress: () => {
          mutation.mutate();
        },
      },
    ]);
  };

  return (
    <View style={tw`relative`}>
      {mutation.isPending ? (
        <ActivityIndicator
          style={tw`h-8 w-8 bg-blue-100`}
          color={COLOR.PRIMARY_GREEN}
        />
      ) : (
        <Pressable
          style={({pressed}) =>
            tw.style([pressed ? 'bg-white' : '', 'rounded-lg p-1'])
          }
          onTouchEnd={e => {
            e.stopPropagation();
            setVisible(value => !value);
          }}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/diary/menu-icon.png')}
          />
        </Pressable>
      )}
      {visible && (
        <View
          style={tw`absolute right-1.5 top-8 flex w-20 flex-col items-center rounded-lg bg-white shadow`}>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'bg-slate-100' : '', 'w-full'])
            }
            onTouchEnd={e => {
              e.stopPropagation();
              setVisible(false);
              navigation.navigate('DiaryUpdate', {diaryId});
            }}>
            <Text style={tw`py-2 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'bg-slate-100' : '', 'w-full'])
            }
            onTouchEnd={e => {
              e.stopPropagation();
              setVisible(false);
              handleDeleteButtonClick();
            }}>
            <Text style={tw`py-2 text-center`}>삭제</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
