import {useNavigation} from '@react-navigation/native';
import {
  createDiary,
  Diary,
  DiaryCreateRequest,
  FEELING_STATUS,
} from '@src/entities/diary';
import {SANITIZE_OPTION} from '@src/shared/config';
import {NavigationProps} from '@src/shared/model';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {UseFormReturn} from 'react-hook-form';
import sanitizeHtml from 'sanitize-html';

export const useDiaryCreateButton = (
  methods: UseFormReturn<Diary, any, undefined>,
  content: string,
) => {
  const navigation = useNavigation<NavigationProps>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      const data: DiaryCreateRequest = {
        title: methods.getValues('title'),
        titleImage: methods.getValues('image')!,
        startDatetime: methods.getValues('startDate')!,
        endDatetime: methods.getValues('endDate')!,
        diaryDayRequests: [
          {
            content: sanitizeHtml(content, SANITIZE_OPTION),
            feelingStatus: FEELING_STATUS[methods.getValues('feeling')!],
            diaryDayContentImages: '',
            place: methods.getValues('location')!,
          },
        ],
      };

      return createDiary(data);
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
