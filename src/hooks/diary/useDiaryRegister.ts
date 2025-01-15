import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {FEELING_STATUS} from '@src/constants/feelingStatus';
import {SANITIZE_OPTION} from '@src/constants/sanitizeOption';
import {Diary} from '@src/types/diary';
import {NavigationProps} from '@src/types/navigation';
import {useMutation} from '@tanstack/react-query';
import {UseFormReturn} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';
import sanitizeHtml from 'sanitize-html';

export const useDiaryRegister = (
  methods: UseFormReturn<Diary, any, undefined>,
  content: string,
) => {
  const navigation = useNavigation<NavigationProps>();
  const mutation = useMutation({
    mutationFn: async () => {
      const diaryData = {
        title: methods.getValues('title'),
        titleImage: methods.getValues('image'),
        startDatetime: methods.getValues('startDate'),
        endDatetime: methods.getValues('endDate'),
        diaryDayRequests: [
          {
            content: sanitizeHtml(content, SANITIZE_OPTION),
            feelingStatus: FEELING_STATUS[methods.getValues('feeling')!],
            diaryDayContentImages: '',
            place: methods.getValues('location'),
          },
        ],
      };

      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/diary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `access_token=${accessToken}`,
        },
        body: JSON.stringify(diaryData),
      });

      if (!response.ok) {
        throw new Error('Failed to register.');
      }

      return await response.text();
    },
    onSuccess: () => {
      navigation.pop();
      // TODO: Invalidate Cache
    },
    throwOnError: true,
  });

  const handleSubmit = async () => {
    await methods.trigger();
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  return {handleSubmit};
};
