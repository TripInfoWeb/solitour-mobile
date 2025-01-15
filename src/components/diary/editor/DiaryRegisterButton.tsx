import {useDiaryRegister} from '@src/hooks/diary/useDiaryRegister';
import {tw} from '@src/libs/tailwind';
import {Diary} from '@src/types/diary';
import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {Pressable, Text} from 'react-native';

interface DiaryRegisterButtonProps {
  methods: UseFormReturn<Diary, any, undefined>;
  content: string;
}

export const DiaryRegisterButton = ({
  methods,
  content,
}: DiaryRegisterButtonProps) => {
  const {handleSubmit} = useDiaryRegister(methods, content);

  return (
    <Pressable
      style={({pressed}) =>
        tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2'])
      }
      onPressOut={() => handleSubmit()}>
      {/* Notice: 2025. 01. 15. 기준 useEffect로 헤더에 등록된 버튼에 이벤트를 등록할 때 onPress는 동작하지 않는 오류가 있습니다.
                  대신 onPressIn과 onPressOut은 잘 동작합니다.
      */}
      <Text style={tw`font-semibold text-primary-green`}>등록</Text>
    </Pressable>
  );
};
