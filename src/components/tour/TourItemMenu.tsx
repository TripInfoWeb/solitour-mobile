import {COLOR} from '@src/constants/color';
import {useTourItemDelete} from '@src/hooks/tour/useTourItemDelete';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {ActivityIndicator, Image, Pressable, View} from 'react-native';

interface TourItemMenuProps {
  planId: number;
  planTitle: string;
}

export const TourItemMenu = ({planId, planTitle}: TourItemMenuProps) => {
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
            tw.style(pressed ? 'bg-slate-100' : '', 'rounded-lg p-2')
          }
          onPress={() => handleDeleteButtonClick()}>
          <Image
            style={tw`h-4 w-4`}
            source={require('@src/assets/common/delete-icon.png')}
          />
        </Pressable>
      )}
    </View>
  );
};
