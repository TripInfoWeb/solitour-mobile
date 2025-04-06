import {useNavigation} from '@react-navigation/native';
import {
  Diary,
  DiaryUpdateRequest,
  FEELING_STATUS,
  updateDiary,
} from '@src/entities/diary';
import {SANITIZE_OPTION} from '@src/shared/config';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {UseFormReturn} from 'react-hook-form';
import sanitizeHtml from 'sanitize-html';

export const useDiaryUpdateButton = (
  diaryId: number,
  originalImage: string,
  methods: UseFormReturn<Diary, any, undefined>,
  content: string,
) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      const saveTitleImage = methods.getValues('image')!;
      const deleteTitleImage =
        originalImage !== saveTitleImage ? originalImage : '';

      const data: DiaryUpdateRequest = {
        title: methods.getValues('title'),
        deleteTitleImage: deleteTitleImage,
        saveTitleImage: saveTitleImage,
        startDatetime: methods.getValues('startDate')!,
        endDatetime: methods.getValues('endDate')!,
        diaryDayRequests: [
          {
            content: sanitizeHtml(content, SANITIZE_OPTION),
            feelingStatus: FEELING_STATUS[methods.getValues('feeling')!],
            deleteImagesUrl: '',
            saveImagesUrl: '',
            place: methods.getValues('location')!,
          },
        ],
      };

      return updateDiary(diaryId, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['diaryList']});
      navigation.goBack();
    },
    retry: 1,
    throwOnError: true,
  });

  const handleSubmit = async () => {
    await methods.trigger();
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  return {isPending: mutation.isPending, handleSubmit};
};
