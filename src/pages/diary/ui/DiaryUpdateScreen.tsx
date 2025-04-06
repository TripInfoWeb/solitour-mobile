import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/shared/model';
import {DiaryUpdateEditor} from '@src/widgets/diaryUpdateEditor';
import React from 'react';

export const DiaryUpdateScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'DiaryUpdate'>) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
