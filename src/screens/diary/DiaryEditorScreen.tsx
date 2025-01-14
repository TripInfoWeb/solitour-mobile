import React, {useState} from 'react';
import {
  Image,
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
  useEditorContent,
} from '@10play/tentap-editor';
import {launchImageLibrary} from 'react-native-image-picker';

export const DiaryEditorScreen = () => {
  // TODO: 커스텀 훅 생성
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
    ],
  });
  const content = useEditorContent(editor, {type: 'html'});
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        setImage(response.assets![0].uri!);
      }
    });
  };

  return (
    <BottomSheetModalProvider>
      <ScrollView style={tw`h-full bg-white px-4 pb-6`}>
        <TextInput
          style={tw`h-14 text-lg font-semibold`}
          placeholder="제목을 입력해 주세요."
          value={title}
          onChangeText={setTitle}
        />
        <DiaryDatePicker />
        <DiaryLocationPicker />
        <DiaryFeelingPicker />
        <SafeAreaView style={tw`h-80 flex-1 py-7`}>
          <RichText editor={editor} />
        </SafeAreaView>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`absolute bottom-0 flex w-full flex-col gap-4`}>
        {image && (
          <Image
            style={tw`ml-4 h-20 w-20 rounded-lg border border-custom-04`}
            source={{uri: image}}
          />
        )}
        <Toolbar
          editor={editor}
          hidden={false}
          items={[
            {
              onPress: () => () => handleImageUpload(),
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
