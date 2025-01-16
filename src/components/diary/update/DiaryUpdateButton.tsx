import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';

export const DiaryUpdateButton = () => {
  const {isPending, handleSubmit} = useDiaryRegister(methods, content);

  if (isPending) {
    return <ActivityIndicator style={tw`p-2`} color={COLOR.PRIMARY_GREEN} />;
  }

  return (
    <Pressable
      style={({pressed}) =>
        tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2'])
      }
      onPressOut={() => handleSubmit()}>
      {/* Notice: 2025. 01. 15. 기준 useEffect로 헤더에 등록된 버튼에 이벤트를 등록할 때 onPress는 동작하지 않는 오류가 있습니다.
                    대신 onPressIn과 onPressOut은 잘 동작합니다.
        */}
      <Text style={tw`font-semibold text-primary-green`}>수정</Text>
    </Pressable>
  );
};
