import {
  PlaceholderBridge,
  TenTapStartKit,
  useEditorBridge,
  useEditorContent,
} from '@10play/tentap-editor';
import {BACKEND_URL} from '@env';
import {zodResolver} from '@hookform/resolvers/zod';
import {DiarySchema} from '@src/libs/zod/DiarySchema';
import {Diary} from '@src/types/diary';
import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';
import {launchImageLibrary} from 'react-native-image-picker';

export const useDiaryEditor = () => {
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
  const methods = useForm<Diary>({
    resolver: zodResolver(DiarySchema),
    defaultValues: {
      title: '',
      startDate: null,
      endDate: null,
      location: null,
      feeling: null,
      content: content,
      image: null,
    },
    mode: 'onChange',
  });

  const imageMutation = useMutation({
    mutationFn: async (image: {
      fileName: string;
      type: string;
      uri: string;
    }) => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const formData = new FormData();
      formData.append('image', {
        name: image.fileName,
        type: image.type,
        uri: image.uri,
      });
      formData.append('type', 'DIARY');

      const response = await fetch(`${BACKEND_URL}/api/image`, {
        method: 'POST',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload an image.');
      }

      return await response.json();
    },
    onSuccess: (data: {fileUrl: string}) => {
      methods.setValue('image', data.fileUrl);
    },
    throwOnError: true,
  });

  const handleImageUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        imageMutation.mutate({
          fileName: response.assets[0].fileName!,
          type: response.assets[0].type!,
          uri: response.assets[0].uri!,
        });
      }
    });
  };

  return {methods, editor, imageMutation, handleImageUpload};
};
