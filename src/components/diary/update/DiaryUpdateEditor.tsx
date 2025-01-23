import React, {useEffect} from 'react';
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
import {tw} from '@src/libs/tailwind';
import {DiaryDatePicker} from '@src/components/diary/editor/date/DiaryDatePicker';
import {DiaryLocationPicker} from '@src/components/diary/editor/location/DiaryLocationPicker';
import {DiaryFeelingPicker} from '@src/components/diary/editor/feeling/DiaryFeelingPicker';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {DEFAULT_TOOLBAR_ITEMS, RichText, Toolbar} from '@10play/tentap-editor';
import {Controller, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/types/navigation';
import {COLOR} from '@src/constants/color';
import {useDiaryEditor} from '@src/hooks/diary/editor/useDiaryEditor';
import {useSuspenseQuery} from '@tanstack/react-query';
import EncryptedStorage from 'react-native-encrypted-storage';
import {BACKEND_URL} from '@env';
import {DiaryDetail} from '@src/types/diary';
import {FEELING_STATUS} from '@src/constants/feelingStatus';
import {DiaryUpdateButton} from './DiaryUpdateButton';

interface DiaryUpdateEditorProps {
  diaryId: number;
}

export const DiaryUpdateEditor = ({diaryId}: DiaryUpdateEditorProps) => {
  const navigation = useNavigation<NavigationProps>();
  const {data} = useSuspenseQuery<DiaryDetail>({
    queryKey: ['diary', diaryId],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/diary/${diaryId}`, {
        method: 'GET',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update.');
      }

      return await response.json();
    },
  });
  const {methods, content, editor, imageMutation, handleImageUpload} =
    useDiaryEditor({
      title: data.diaryContentResponse.title,
      startDate: new Date(data.diaryContentResponse.startDatetime),
      endDate: new Date(data.diaryContentResponse.endDatetime),
      location:
        data.diaryContentResponse.diaryDayContentResponses
          .diaryDayContentDetail[0].place,
      feeling:
        FEELING_STATUS[
          data.diaryContentResponse.diaryDayContentResponses
            .diaryDayContentDetail[0].feelingStatus
        ],
      content:
        data.diaryContentResponse.diaryDayContentResponses
          .diaryDayContentDetail[0].content,
      image: data.diaryContentResponse.titleImage,
    });

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <DiaryUpdateButton
          diaryId={diaryId}
          originalImage={data.diaryContentResponse.titleImage}
          methods={methods}
          content={content ?? ''}
        />
      ),
    });
  }, [
    content,
    data.diaryContentResponse.titleImage,
    diaryId,
    editor,
    methods,
    navigation,
  ]);

  return (
    <FormProvider {...methods}>
      <BottomSheetModalProvider>
        <ScrollView style={tw`h-full bg-white px-4 pb-6`}>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={tw`h-14 text-lg font-semibold`}
                placeholderTextColor={
                  methods.formState.errors.title && COLOR.BLUE
                }
                placeholder="제목을 입력해 주세요."
                onChangeText={onChange}
                value={value}
                maxLength={50}
              />
            )}
            name="title"
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
          {methods.formState.errors.image && (
            <Text style={tw`ml-4 text-blue-500`}>
              {methods.formState.errors.image.message}
            </Text>
          )}
          {imageMutation.isPending ? (
            <View
              style={tw`ml-4 flex h-20 w-20 items-center justify-center rounded-lg border border-custom-04`}>
              <ActivityIndicator color={COLOR.PRIMARY_GREEN} />
            </View>
          ) : (
            methods.watch('image') && (
              <Image
                style={tw`ml-4 h-20 w-20 rounded-lg border border-custom-04`}
                source={{uri: methods.watch('image')!}}
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
                image: () => require('@src/assets/common/image-icon-small.png'),
              },
              ...DEFAULT_TOOLBAR_ITEMS.filter((_, index) =>
                [0, 1, 6, 7, 13, 14].includes(index),
              ),
            ]}
          />
        </KeyboardAvoidingView>
      </BottomSheetModalProvider>
    </FormProvider>
  );
};
