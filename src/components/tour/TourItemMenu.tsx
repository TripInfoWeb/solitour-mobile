import {COLOR} from '@src/constants/color';
import {useTourItemDelete} from '@src/hooks/tour/useTourItemDelete';
import {tw} from '@src/libs/tailwind';
import React, {useState} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';

interface TourItemMenuProps {
  planId: number;
  planTitle: string;
}

export const TourItemMenu = ({planId, planTitle}: TourItemMenuProps) => {
  const [visible, setVisible] = useState(false);
  const {isPending, handleDeleteButtonClick} = useTourItemDelete(
    planId,
    planTitle,
  );

  return (
    <View style={tw`relative`}>
      {isPending ? (
        <ActivityIndicator style={tw`h-8 w-8`} color={COLOR.PRIMARY_GREEN} />
      ) : (
        <Pressable
          style={({pressed}) =>
            tw.style(pressed && 'bg-white', 'rounded-lg p-1')
          }
          onPress={() => setVisible(value => !value)}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/menu-icon.png')}
          />
        </Pressable>
      )}
      {visible && (
        <View
          style={tw`absolute right-1.5 top-8 z-10 flex w-20 flex-col rounded-lg bg-white shadow`}>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onPress={() => {
              setVisible(false);
              // TODO
            }}>
            <Text style={tw`py-2.5 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onPress={() => {
              setVisible(false);
              handleDeleteButtonClick();
            }}>
            <Text style={tw`py-2.5 text-center`}>삭제</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
