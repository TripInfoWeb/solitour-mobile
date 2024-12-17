import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useCallback} from 'react';
import {tw} from '../../../../libs/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '../../../../constants/color';
import {PrimaryButton} from '../../../common/PrimaryButton';
import CalendarPicker from 'react-native-calendar-picker';

const currentDate = new Date();

interface DiaryDateBottomSheetModalProps {
  endDate: Date | null;
  setStateDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  closeBottomSheetModal: () => void;
}

export const DiaryDateBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryDateBottomSheetModalProps
>(
  (
    {endDate, setStateDate, setEndDate, closeBottomSheetModal},
    bottomSheetModalRef,
  ) => {
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
        snapPoints={[500]}
        backdropComponent={renderBackdrop}>
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
                source={require('../../../../assets/common/close.png')}
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
                  source={require('../../assets/common/chevronLeft.png')}
                />
              }
              nextComponent={
                <Image
                  style={tw`h-6 w-6`}
                  source={require('../../assets/common/chevronRight.png')}
                />
              }
              onDateChange={(date, type) => {
                if (type === 'END_DATE') {
                  setEndDate(date);
                } else {
                  setStateDate(date);
                  setEndDate(null);
                }
              }}
            />
          </View>
          <PrimaryButton
            title="선택하기"
            disabled={endDate === null}
            onPress={() => closeBottomSheetModal()}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
