import React from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {forwardRef} from 'react';
import {tw} from '@src/shared/lib/utils';
import {Pressable, Text} from 'react-native';
import {COLOR} from '@src/shared/config';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/shared/model';
import {BottomSheetModalTemplate} from '@src/shared/ui/bottomSheetModal';

interface SavePlanBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const SavePlanBottomSheetModal = forwardRef<
  BottomSheetModal,
  SavePlanBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <BottomSheetModalTemplate
      ref={bottomSheetModalRef}
      snapPoints={[260]}
      closeBottomSheetModal={closeBottomSheetModal}>
      <BottomSheetView style={tw`flex h-60 flex-col items-center p-4`}>
        <Text style={tw`text-center text-2xl font-bold text-custom-01`}>
          저장 완료!
        </Text>
        <Text style={tw`pt-0.5 text-center text-sm text-custom-03`}>
          내 여행 리스트로 이동합니다
        </Text>
        <Pressable
          style={({pressed}) =>
            tw.style(
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'mt-8 flex h-12 w-full flex-row items-center justify-center rounded-lg',
            )
          }
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabs', params: {screen: 'Plan'}}],
            })
          }>
          <Text style={tw`text-lg font-semibold text-white`}>확인</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            tw.style(
              pressed
                ? 'android:bg-custom-disabled ios:bg-custom-gray-ripple'
                : 'bg-custom-disabled',
              'mt-3 flex h-12 w-full flex-row items-center justify-center rounded-lg',
            )
          }
          android_ripple={{color: COLOR.GRAY_RIPPLE}}
          onPress={() => closeBottomSheetModal()}>
          <Text style={tw`text-lg font-semibold text-white`}>취소</Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheetModalTemplate>
  );
});
