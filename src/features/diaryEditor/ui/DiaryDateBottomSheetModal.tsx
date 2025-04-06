import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {forwardRef} from 'react';
import {tw} from '@src/shared/lib/utils';
import {Image, Pressable, Text, View} from 'react-native';
import {COLOR} from '@src/shared/config';
import CalendarPicker from 'react-native-calendar-picker';
import {PrimaryButton} from '@src/shared/ui/button';
import {useFormContext} from 'react-hook-form';
import {Diary} from '@src/entities/diary';
import {BottomSheetModalTemplate} from '@src/shared/ui/bottomSheetModal';

const currentDate = new Date();

interface DiaryDateBottomSheetModalProps {
  closeBottomSheetModal: () => void;
}

export const DiaryDateBottomSheetModal = forwardRef<
  BottomSheetModal,
  DiaryDateBottomSheetModalProps
>(({closeBottomSheetModal}, bottomSheetModalRef) => {
  const formContext = useFormContext<Diary>();

  return (
    <BottomSheetModalTemplate
      ref={bottomSheetModalRef}
      snapPoints={[500]}
      closeBottomSheetModal={closeBottomSheetModal}>
      <BottomSheetView style={tw`h-[30rem] px-5`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-[1.375rem] font-semibold`}>날짜</Text>
          <Pressable
            style={({pressed}) =>
              tw.style(pressed && 'ios:bg-slate-100', 'rounded-2xl p-2')
            }
            android_ripple={{color: COLOR.GRAY_RIPPLE}}
            onPress={() => closeBottomSheetModal()}>
            <Image
              style={tw`h-4 w-4`}
              source={require('@assets/common/close.png')}
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
                source={require('@assets/common/chevronLeft.png')}
              />
            }
            nextComponent={
              <Image
                style={tw`h-6 w-6`}
                source={require('@assets/common/chevronRight.png')}
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
          disabled={formContext.watch('endDate') === null}
          onPress={() => closeBottomSheetModal()}
        />
      </BottomSheetView>
    </BottomSheetModalTemplate>
  );
});
