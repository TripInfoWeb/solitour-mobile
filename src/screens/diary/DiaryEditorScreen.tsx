import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {tw} from '../../libs/tailwind';

export const DiaryEditorScreen = () => {
  const [title, setTitle] = useState('');

  return (
    <ScrollView style={tw`bg-white px-4`}>
      <TextInput
        style={tw`text-lg font-semibold`}
        placeholder="제목을 입력해 주세요."
        value={title}
        onChangeText={setTitle}
      />
    </ScrollView>
  );
};
