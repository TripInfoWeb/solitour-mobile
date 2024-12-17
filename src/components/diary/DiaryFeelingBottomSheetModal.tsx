import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useCallback} from 'react';
import {tw} from '../../libs/tailwind';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '../../constants/color';
import {PrimaryButton} from '../common/PrimaryButton';

const FEELINGLIST = [
  {source: require('../../assets/diary/feeling1.png'), label: '최고'},
  {source: require('../../assets/diary/feeling2.png'), label: '좋아'},
  {source: require('../../assets/diary/feeling3.png'), label: '무난'},
  {source: require('../../assets/diary/feeling4.png'), label: '슬퍼'},
  {source: require('../../assets/diary/feeling5.png'), label: '화나'},
];

interface DiaryFeelingBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryFeelingBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryFeelingBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="none"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      style={tw`rounded-2xl`}
      ref={bottomSheetModalRef}
      snapPoints={[340]}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={tw`h-80 px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>기분</Text>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'ios:bg-slate-100' : '', 'rounded-2xl p-2'])
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('../../assets/common/close.png')}
            />
          </Pressable>
        </View>
        <FlatList
          style={tw`pt-3`}
          data={FEELINGLIST}
          renderItem={({item}) => (
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-3',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image style={tw`h-10 w-8`} source={item.source} />
              <Text style={tw`text-gray-500`}>{item.label}</Text>
            </Pressable>
          )}
          keyExtractor={item => item.label}
          numColumns={3}
        />
        <PrimaryButton title="선택하기" />
      </BottomSheetView>
    </BottomSheetModal>
  );
});