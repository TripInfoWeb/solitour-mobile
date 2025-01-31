import {useNavigation} from '@react-navigation/native';
import {COLOR} from '@src/constants/color';
import {useDiaryDelete} from '@src/hooks/diary/list/useDiaryDelete';
import {tw} from '@src/libs/tailwind';
import {DiaryDetail} from '@src/types/diary';
import {NavigationProps} from '@src/types/navigation';
import React, {useState} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';

interface DiaryCardMenuProps {
  diary: DiaryDetail;
}

export const DiaryCardMenu = ({diary}: DiaryCardMenuProps) => {
  const navigation = useNavigation<NavigationProps>();
  const [visible, setVisible] = useState(false);
  const {isPending, handleDeleteButtonClick} = useDiaryDelete(diary.diaryId);

  return (
    <View style={tw`relative`}>
      {isPending ? (
        <ActivityIndicator
          style={tw`h-8 w-8 bg-blue-100`}
          color={COLOR.PRIMARY_GREEN}
        />
      ) : (
        <Pressable
          style={({pressed}) =>
            tw.style(pressed && 'bg-white', 'rounded-lg p-1')
          }
          onTouchEnd={e => {
            e.stopPropagation();
            setVisible(value => !value);
          }}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/menu-icon.png')}
          />
        </Pressable>
      )}
      {visible && (
        <View
          style={tw`absolute right-1.5 top-8 flex w-20 flex-col items-center rounded-lg bg-white shadow`}>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onTouchEnd={e => {
              e.stopPropagation();
              setVisible(false);
              navigation.navigate('DiaryUpdate', {diary});
            }}>
            <Text style={tw`py-2 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
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
