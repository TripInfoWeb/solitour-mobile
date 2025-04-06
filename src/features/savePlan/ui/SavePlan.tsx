import {COLOR} from '@src/shared/config';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {useSavePlan} from '../model/useSavePlan';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {SavePlanBottomSheetModal} from './SavePlanBottomSheetModal';

interface SavePlanProps {
  planId: number;
}

export const SavePlan = ({planId}: SavePlanProps) => {
  const {isPending, bottomSheetModalRef, handleSaveButtonClick} =
    useSavePlan(planId);

  return (
    <BottomSheetModalProvider>
      <View
        style={tw`flex h-20 w-full flex-row items-center gap-2.5 rounded-t-2xl bg-white px-2.5 pb-3 pt-[1.125rem]`}>
        <Pressable
          style={({pressed}) =>
            tw.style(
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'flex h-12 flex-1 flex-row items-center justify-center rounded-lg',
            )
          }
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
          onPress={() => handleSaveButtonClick()}>
          {isPending ? (
            <ActivityIndicator size={30} color={'#FFFFFF'} />
          ) : (
            <Text style={tw`text-center text-lg font-semibold text-white`}>
              코스 저장하기
            </Text>
          )}
        </Pressable>
      </View>
      <SavePlanBottomSheetModal
        ref={bottomSheetModalRef}
        closeBottomSheetModal={() =>
          bottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </BottomSheetModalProvider>
  );
};
