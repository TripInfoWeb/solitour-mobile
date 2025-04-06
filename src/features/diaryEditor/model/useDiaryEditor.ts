import {
  PlaceholderBridge,
  TenTapStartKit,
  useEditorBridge,
  useEditorContent,
} from '@10play/tentap-editor';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Diary} from '@src/entities/diary';
import {DiarySchema} from './DiarySchema';

export const useDiaryEditor = (placeholderData?: {
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  feeling: string;
  content: string;
  image: string;
}) => {
  const editor = useEditorBridge({
    avoidIosKeyboard: true,
    initialContent: placeholderData?.content,
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
      title: placeholderData?.title ?? '',
      startDate: placeholderData?.startDate ?? null,
      endDate: placeholderData?.endDate ?? null,
      location: placeholderData?.location ?? null,
      feeling: placeholderData?.feeling ?? null,
      image: placeholderData?.image ?? null,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (editor.getEditorState().isReady && placeholderData?.content) {
      editor.setContent(placeholderData?.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor.getEditorState().isReady, placeholderData?.content]);

  return {methods, content, editor};
};
