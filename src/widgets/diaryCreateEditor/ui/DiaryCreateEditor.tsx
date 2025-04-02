import {useNavigation} from '@react-navigation/native';
import {DiaryEditor, useDiaryEditor} from '@src/features/diaryEditor';
import {NavigationProps} from '@src/types/navigation';
import React, {useEffect} from 'react';
import {FormProvider} from 'react-hook-form';
import {DiaryCreateButton} from './DiaryCreateButton';

export const DiaryCreateEditor = () => {
  const navigation = useNavigation<NavigationProps>();
  const {methods, content, editor, imageMutation, handleImageUpload} =
    useDiaryEditor();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <DiaryCreateButton methods={methods} content={content ?? ''} />
      ),
    });
  }, [content, methods, navigation]);

  return (
    <FormProvider {...methods}>
      <DiaryEditor />
    </FormProvider>
  );
};
