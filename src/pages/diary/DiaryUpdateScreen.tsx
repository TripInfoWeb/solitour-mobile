import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationList} from '@src/types/navigation';
import {DiaryUpdateEditor} from '@src/widgets/diaryUpdateEditor';
import React from 'react';

export const DiaryUpdateScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'DiaryUpdate'>) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
