import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

interface SurveyResultItemProps {
  index: number;
  plan: {
    id: number;
    title: string;
    createdDate: string;
    days: {
      id: number;
      placeName: string;
      latitude: number;
      longitude: number;
    }[][];
  };
}

export const SurveyResultItem = ({index, plan}: SurveyResultItemProps) => {
  return (
    <View style={tw`flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5`}>
      <View style={tw`-ml-2 flex flex-row items-center gap-2 pb-2`}>
        <Text
          style={tw`border-custom-blue text-custom-blue h-6 w-6 rounded-full border text-center font-semibold`}>
          {index}
        </Text>
        <Text style={tw`text-xl font-semibold text-custom-01`}>
          {plan.title}
        </Text>
      </View>
      <FlatList
        data={plan.days[0]}
        renderItem={({item}) => (
          <View style={tw`flex flex-row items-start gap-3.5`}>
            <View style={tw`flex flex-col items-center`}>
              <View style={tw`h-2 w-2 rounded-full bg-custom-01`} />
              <View
                style={tw`h-10 w-px border border-dashed border-[#D2D2D2]`}
              />
            </View>
            <Text style={tw`-mt-1.5 font-semibold text-custom-01`}>
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
        android_ripple={{color: '#bfdbfe'}}>
        <Text style={tw`text-custom-blue text-center`}>자세히 보기</Text>
      </Pressable>
    </View>
  );
};
