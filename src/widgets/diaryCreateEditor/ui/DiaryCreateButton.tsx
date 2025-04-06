import {Diary} from '@src/entities/diary';
import {COLOR} from '@src/shared/config';
import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import {useDiaryCreateButton} from '../model/useDiaryCreateButton';
import {tw} from '@src/shared/lib/utils';

interface DiaryCreateButtonProps {
  methods: UseFormReturn<Diary, any, undefined>;
  content: string;
}

export const DiaryCreateButton = ({
  methods,
  content,
}: DiaryCreateButtonProps) => {
  const {isPending, handleSubmit} = useDiaryCreateButton(methods, content);

  if (isPending) {
    return <ActivityIndicator style={tw`p-2`} color={COLOR.PRIMARY_GREEN} />;
  }

  return (
    <Pressable
      style={({pressed}) =>
        tw.style(pressed && 'bg-slate-100', 'rounded-2xl p-2')
      }
      onPressOut={() => handleSubmit()}>
      {/* Notice: 2025. 01. 15. 기준 useEffect로 헤더에 등록된 버튼에 이벤트를 등록할 때 onPress는 동작하지 않는 오류가 있습니다.
                  대신 onPressIn과 onPressOut은 잘 동작합니다.
      */}
      <Text style={tw`font-semibold text-primary-green`}>등록</Text>
    </Pressable>
  );
};
