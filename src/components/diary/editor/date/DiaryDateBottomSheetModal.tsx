import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useCallback} from 'react';
import {tw} from '@src/libs/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '@src/constants/color';
import CalendarPicker from 'react-native-calendar-picker';
import {PrimaryButton} from '@src/components/common/PrimaryButton';
import {useBackHandler} from '@src/hooks/useBackHandler';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/types/diary';

const currentDate = new Date();

interface DiaryDateBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryDateBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryDateBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const formContext = useFormContext<Diary>();
  const {addBackPressEventListener, removeBackPressEventListener} =
    useBackHandler(closeBottomSheetModal);
  const renderBackdrop = useCallback(
    (props: any) => {
      addBackPressEventListener();
      return (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="none"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      );
    },
    [addBackPressEventListener],
  );

  return (
    <BottomSheetModal
      style={tw`rounded-2xl`}
      ref={bottomSheetModalRef}
      snapPoints={[500]}
      backdropComponent={renderBackdrop}
      onDismiss={removeBackPressEventListener}>
      <BottomSheetView style={tw`h-[30rem] px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>날짜</Text>
          <Pressable
            style={({pressed}) =>
              tw.style([pressed ? 'ios:bg-slate-100' : '', 'rounded-2xl p-2'])
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('@src/assets/common/close.png')}
            />
          </Pressable>
        </View>
        <View style={tw`pt-6`}>
          <CalendarPicker
            weekdays={['일', '월', '화', '수', '목', '금', '토']}
            months={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]}
            allowRangeSelection={true}
            allowBackwardRangeSelect={true}
            selectedDayColor={COLOR.PRIMARY_GREEN}
            selectedDayTextColor="white"
            todayBackgroundColor="white"
            todayTextStyle={{color: COLOR.PRIMARY_GREEN}}
            maxDate={currentDate}
            previousComponent={
              <Image
                style={tw`h-6 w-6`}
                source={require('@src/assets/common/chevronLeft.png')}
              />
            }
            nextComponent={
              <Image
                style={tw`h-6 w-6`}
                source={require('@src/assets/common/chevronRight.png')}
              />
            }
            onDateChange={(date, type) => {
              if (type === 'END_DATE') {
                formContext.setValue('endDate', date);
              } else {
                formContext.setValue('startDate', date);
                formContext.setValue('endDate', null);
              }
            }}
          />
        </View>
        <PrimaryButton
          title="선택하기"
          disabled={formContext.getValues('endDate') === null}
          onPress={() => closeBottomSheetModal()}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});
