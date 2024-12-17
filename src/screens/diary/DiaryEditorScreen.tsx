import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {DiaryDatePicker} from '@src/components/diary/editor/date/DiaryDatePicker';
import {DiaryLocationPicker} from '@src/components/diary/editor/location/DiaryLocationPicker';
import {DiaryFeelingPicker} from '@src/components/diary/editor/feeling/DiaryFeelingPicker';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const DiaryEditorScreen = () => {
  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  return (
    <BottomSheetModalProvider>
      <ScrollView style={tw`bg-white px-4 pt-6`}>
        <TextInput
          style={tw`text-lg font-semibold`}
          placeholder="제목을 입력해 주세요."
          value={title}
          onChangeText={setTitle}
        />
        <DiaryDatePicker />
        <DiaryLocationPicker />
        <DiaryFeelingPicker />
        <TextInput
          style={tw`my-11`}
          multiline={true}
          textAlignVertical="top"
          placeholder="여행은 어땠나요? 자유롭게 기록하고 싶은 것들을 작성해보세요."
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </BottomSheetModalProvider>
  );
};
