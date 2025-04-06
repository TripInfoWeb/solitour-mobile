import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SavedPlan} from '../model/plan';

interface PlanItemProps {
  children: React.ReactNode;
  data: SavedPlan;
}

export const PlanItem = ({children, data}: PlanItemProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={tw`mt-4 flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5`}>
      <View style={tw`flex w-full`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text
            style={tw`text-xl font-semibold text-custom-01`}
            numberOfLines={1}>
            {data.plan.title}
          </Text>
          {children}
        </View>
        <Text style={tw`text-sm text-custom-03`}>
          {data.plan.days.length === 1
            ? '무박 1일'
            : `${data.plan.days.length - 1}박 ${data.plan.days.length}일`}
        </Text>
      </View>
      <View style={tw`pt-2`}>
        {data.plan.days[0].daysDetailResponses.slice(0, 3).map(item => (
          <View key={item.id} style={tw`flex flex-row items-start gap-3.5`}>
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
        ))}
      </View>
      <Pressable
        style={({pressed}) =>
          tw.style(
            pressed ? 'android:bg-[#E9F0F9] ios:bg-blue-200' : 'bg-[#E9F0F9]',
            'flex h-[2.625rem] items-center justify-center rounded-lg',
          )
        }
        android_ripple={{color: '#bfdbfe'}}
        onPress={() => navigation.navigate('PlanDetail', {savedPlan: data})}>
        <Text style={tw`text-center text-custom-blue`}>자세히 보기</Text>
      </Pressable>
    </View>
  );
};
