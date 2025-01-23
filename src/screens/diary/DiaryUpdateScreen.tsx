import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiaryUpdateEditor} from '@src/components/diary/update/DiaryUpdateEditor';
import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native';

export const DiaryUpdateScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'DiaryUpdate'>) => {
  return (
    <Suspense
      fallback={
        <ActivityIndicator
          style={tw`h-full bg-white`}
          size={50}
          color={COLOR.PRIMARY_GREEN}
        />
      }>
      <DiaryUpdateEditor diaryId={route.params.diaryId} />
    </Suspense>
  );
};
