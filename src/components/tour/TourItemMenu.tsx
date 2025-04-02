import {COLOR} from '@src/shared/config/color';
import {useTourItemDelete} from '@src/hooks/tour/useTourItemDelete';
import {tw} from '@src/shared/lib/utils/tailwind';
import React, {useState} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';
import {TourItemTitleModal} from './TourItemTitleModal';

interface TourItemMenuProps {
  planId: number;
  planTitle: string;
}

export const TourItemMenu = ({planId, planTitle}: TourItemMenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
          onPress={() => setMenuVisible(value => !value)}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/menu-icon.png')}
          />
        </Pressable>
      )}
      {menuVisible && (
        <View
          style={tw`absolute right-1.5 top-8 z-10 flex w-20 flex-col rounded-lg bg-white shadow`}>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onPress={() => {
              setMenuVisible(false);
              setModalVisible(true);
            }}>
            <Text style={tw`py-2.5 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => tw.style(pressed && 'bg-slate-100', 'w-full')}
            onPress={() => {
              setMenuVisible(false);
              handleDeleteButtonClick();
            }}>
            <Text style={tw`py-2.5 text-center`}>삭제</Text>
          </Pressable>
        </View>
      )}
      <TourItemTitleModal
        planId={planId}
        title={planTitle}
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  );
};
