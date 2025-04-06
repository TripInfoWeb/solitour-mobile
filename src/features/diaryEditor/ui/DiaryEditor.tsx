import {
  DEFAULT_TOOLBAR_ITEMS,
  EditorBridge,
  RichText,
  Toolbar,
} from '@10play/tentap-editor';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {COLOR} from '@src/shared/config';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {DiaryEditorDate} from './DiaryEditorDate';
import {DiaryEditorLocation} from './DiaryEditorLocation';
import {DiaryEditorFeeling} from './DiaryEditorFeeling';
import {useImageUploader} from '../model/useImageUploader';
import {Diary} from '@src/entities/diary';

interface DiaryEditorProps {
  editor: EditorBridge;
}

export const DiaryEditor = ({editor}: DiaryEditorProps) => {
  const formContext = useFormContext<Diary>();
  const {imageMutation, handleImageUpload} = useImageUploader();

  return (
    <BottomSheetModalProvider>
      <ScrollView style={tw`h-full bg-white px-4 pb-6`}>
        <Controller
          name="title"
          control={formContext.control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={tw`h-14 text-lg font-semibold`}
              placeholderTextColor={
                formContext.formState.errors.title && COLOR.BLUE
              }
              placeholder="제목을 입력해 주세요."
              onChangeText={onChange}
              value={value}
              maxLength={50}
            />
          )}
        />
        <DiaryEditorDate />
        <DiaryEditorLocation />
        <DiaryEditorFeeling />
        <SafeAreaView style={tw`h-80 flex-1 py-7`}>
          <RichText editor={editor} />
        </SafeAreaView>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`absolute bottom-0 flex w-full flex-col gap-4`}>
        {formContext.formState.errors.image && (
          <Text style={tw`ml-4 text-blue-500`}>
            {formContext.formState.errors.image.message}
          </Text>
        )}
        {imageMutation.isPending ? (
          <View
            style={tw`ml-4 flex h-20 w-20 items-center justify-center rounded-lg border border-custom-04`}>
            <ActivityIndicator color={COLOR.PRIMARY_GREEN} />
          </View>
        ) : (
          formContext.watch('image') && (
            <Image
              style={tw`ml-4 h-20 w-20 rounded-lg border border-custom-04`}
              source={{uri: formContext.watch('image')!}}
            />
          )
        )}
        <Toolbar
          editor={editor}
          hidden={false}
          items={[
            {
              onPress: () => () => handleImageUpload(),
              active: () => false,
              disabled: () => false,
              image: () => require('@assets/common/image-icon-small.png'),
            },
            ...DEFAULT_TOOLBAR_ITEMS.filter((_, index) =>
              [0, 1, 6, 7, 13, 14].includes(index),
            ),
          ]}
        />
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};
