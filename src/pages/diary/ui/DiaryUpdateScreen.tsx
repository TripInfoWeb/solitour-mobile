import {DiaryUpdateEditor} from '@src/widgets/diaryUpdateEditor';
import React from 'react';

export const DiaryUpdateScreen = ({
  route,
}: RootStackScreenProps<'DiaryUpdate'>) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
