import React, {useEffect} from 'react';
import {FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {DiaryDetail, FEELING_STATUS} from '@src/entities/diary';
import {NavigationProps} from '@src/shared/model';
import {DiaryEditor, useDiaryEditor} from '@src/features/diaryEditor';
import {DiaryUpdateButton} from './DiaryUpdateButton';

interface DiaryUpdateEditorProps {
  diary: DiaryDetail;
}

export const DiaryUpdateEditor = ({diary}: DiaryUpdateEditorProps) => {
  const navigation = useNavigation<NavigationProps>();
  const {methods, content, editor} = useDiaryEditor({
    title: diary.title,
    startDate: new Date(`${diary.startDatetime}.0Z`),
    endDate: new Date(`${diary.endDatetime}.0Z`),
    location: diary.diaryDayContentResponses.diaryDayContentDetail[0].place,
    feeling:
      FEELING_STATUS[
        diary.diaryDayContentResponses.diaryDayContentDetail[0].feelingStatus
      ],
    content: diary.diaryDayContentResponses.diaryDayContentDetail[0].content,
    image: diary.titleImage,
  });

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <DiaryUpdateButton
          diaryId={diary.diaryId}
          originalImage={diary.titleImage}
          methods={methods}
          content={content ?? ''}
        />
      ),
    });
  }, [content, diary.diaryId, diary.titleImage, methods, navigation]);

  return (
    <FormProvider {...methods}>
      <DiaryEditor editor={editor} />
    </FormProvider>
  );
};
