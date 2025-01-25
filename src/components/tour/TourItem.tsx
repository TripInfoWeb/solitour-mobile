import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import {SavedPlan} from '@src/types/plan';
import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

interface TourItemProps {
  data: SavedPlan;
}

export const TourItem = ({data}: TourItemProps) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={tw`mt-4 flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5`}>
      <View style={tw`flex flex-col`}>
        <Text style={tw`text-xl font-semibold text-custom-01`}>
          {data.plan.title}
        </Text>
        <Text
          style={tw`pt-2 text-sm text-custom-03`}>{`생성 날짜: ${data.plan.createdDate}`}</Text>
        <Text
          style={tw`text-sm text-custom-03`}>{`여행 기간: ${data.plan.days.length}일`}</Text>
      </View>
      <FlatList
        style={tw`pt-2`}
        data={data.plan.days[0].daysDetailResponses.slice(0, 3)}
        renderItem={({item}) => (
          <View style={tw`flex flex-row items-start gap-3.5`}>
            <View style={tw`flex flex-col items-center`}>
              <View style={tw`h-2 w-2 rounded-full bg-custom-01`} />
              <View
                style={tw`h-10 w-px border border-dashed border-[#D2D2D2]`}
              />
            </View>
            <Text style={tw`-mt-[0.4375rem] font-semibold text-custom-01`}>
              {item.placeName}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Pressable
        style={({pressed}) =>
          tw.style([
            pressed ? 'android:bg-[#E9F0F9] ios:bg-blue-200' : 'bg-[#E9F0F9]',
            'flex h-[2.625rem] items-center justify-center rounded-lg',
          ])
        }
        android_ripple={{color: '#bfdbfe'}}
        onPress={() => navigation.navigate('TourDetail', {savedPlan: data})}>
        <Text style={tw`text-center text-custom-blue`}>자세히 보기</Text>
      </Pressable>
    </View>
  );
};
