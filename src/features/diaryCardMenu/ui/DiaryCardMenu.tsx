import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DiaryDetail} from '@src/entities/diary';
import {NavigationProps} from '@src/shared/model';
import {useState} from 'react';
import {useDiaryCardMenu} from '../model/useDiaryCardMenu';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {COLOR} from '@src/shared/config';

interface DiaryCardMenuProps {
  diary: DiaryDetail;
}

export const DiaryCardMenu = ({diary}: DiaryCardMenuProps) => {
  const navigation = useNavigation<NavigationProps>();
  const [visible, setVisible] = useState(false);
  const {isPending, handleDeleteButtonClick} = useDiaryCardMenu(diary.diaryId);

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
            source={require('@assets/common/menu-icon.png')}
          />
        </Pressable>
      )}
      {visible && (
        <View
          style={tw`absolute right-1.5 top-8 z-10 flex w-20 flex-col items-center rounded-lg bg-white shadow`}>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onTouchEnd={e => {
              e.stopPropagation();
              setVisible(false);
              navigation.navigate('DiaryUpdate', {diary});
            }}>
            <Text style={tw`py-2.5 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onTouchEnd={e => {
              e.stopPropagation();
              setVisible(false);
              handleDeleteButtonClick();
            }}>
            <Text style={tw`py-2.5 text-center`}>삭제</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
