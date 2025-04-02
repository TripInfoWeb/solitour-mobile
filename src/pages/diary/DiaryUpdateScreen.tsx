import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiaryUpdateEditor} from '@src/components/diary/update/DiaryUpdateEditor';
import {NavigationList} from '@src/types/navigation';
import React from 'react';

export const DiaryUpdateScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'DiaryUpdate'>) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
