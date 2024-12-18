import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {DiaryDatePicker} from '@src/components/diary/editor/date/DiaryDatePicker';
import {DiaryLocationPicker} from '@src/components/diary/editor/location/DiaryLocationPicker';
import {DiaryFeelingPicker} from '@src/components/diary/editor/feeling/DiaryFeelingPicker';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  PlaceholderBridge,
  RichText,
  TenTapStartKit,
  Toolbar,
  useEditorBridge,
  DEFAULT_TOOLBAR_ITEMS,
} from '@10play/tentap-editor';

export const DiaryEditorScreen = () => {
  const [title, setTitle] = useState('');
  const editor = useEditorBridge({
    avoidIosKeyboard: true,
    initialContent: '',
    bridgeExtensions: [
      ...TenTapStartKit,
      PlaceholderBridge.configureExtension({
        placeholder:
          '여행은 어땠나요? 자유롭게 기록하고 싶은 것들을 작성해보세요.',
      }),
      // ImageBridge.configureExtension({inline: true, allowBase64: true}),
    ],
  });
  // const content = useEditorContent(editor, {type: 'html'});

  return (
    <BottomSheetModalProvider>
      <ScrollView style={tw`h-full bg-white px-4 py-6`}>
        <TextInput
          style={tw`h-14 text-lg font-semibold`}
          placeholder="제목을 입력해 주세요."
          value={title}
          onChangeText={setTitle}
        />
        <DiaryDatePicker />
        <DiaryLocationPicker />
        <DiaryFeelingPicker />
        <SafeAreaView style={tw`h-96 flex-1 py-7`}>
          <RichText editor={editor} />
        </SafeAreaView>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`absolute bottom-0 w-full`}>
        <Toolbar
          editor={editor}
          hidden={false}
          items={[
            {
              onPress: () => () => {},
              active: () => false,
              disabled: () => false,
              image: () => require('@src/assets/common/image-icon.png'),
            },
            ...DEFAULT_TOOLBAR_ITEMS,
          ]}
        />
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};
