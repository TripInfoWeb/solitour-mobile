import {BACKEND_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {FEELING_STATUS} from '@src/constants/feelingStatus';
import {SANITIZE_OPTION} from '@src/constants/sanitizeOption';
import {tw} from '@src/libs/tailwind';
import {Diary} from '@src/types/diary';
import {NavigationProps} from '@src/types/navigation';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {Pressable, Text} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import sanitizeHtml from 'sanitize-html';

interface DiaryRegisterButtonProps {
  methods: UseFormReturn<Diary, any, undefined>;
  content: string;
}

export const DiaryRegisterButton = ({
  methods,
  content,
}: DiaryRegisterButtonProps) => {
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

  return (
    <Pressable
      style={({pressed}) => {
        return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
      }}
      onPressOut={() => handleSubmit()}>
      {/* Notice: 2025. 01. 15. 기준 useEffect로 헤더에 등록된 버튼에 이벤트를 등록할 때 onPress는 동작하지 않는 오류가 있습니다.
                  대신 onPressIn과 onPressOut은 잘 동작합니다.
      */}
      <Text style={tw`font-semibold text-primary-green`}>등록</Text>
    </Pressable>
  );
};
