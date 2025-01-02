import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tw} from '@src/libs/tailwind';
import {NavigationList} from '@src/types/navigation';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

export const SurveyResultDetailScreen = ({
  route,
}: NativeStackScreenProps<NavigationList, 'SurveyResultDetail'>) => {
  const {index, plan} = route.params;

  return (
    <View style={tw`h-full bg-[#F3F3F3]`}>
      <View style={tw`flex h-48 w-full justify-center bg-teal-100`}>
        <Text style={tw`text-center`}>지도</Text>
      </View>
      <ScrollView style={tw`px-4 pt-4`}>
        <View style={tw`flex flex-row items-center gap-2 pb-6`}>
          <Text
            style={tw`border-custom-blue text-custom-blue h-6 w-6 rounded-full border text-center font-semibold`}>
            {index}
          </Text>
          <Text style={tw`text-xl font-semibold text-custom-01`}>
            {plan.title}
          </Text>
        </View>
        {plan.days[0].map(item => (
          <View
            key={item.id}
            style={tw`ml-2 flex flex-row items-start gap-3.5`}>
            <View style={tw`flex flex-col items-center`}>
              <View style={tw`h-2 w-2 rounded-full bg-custom-01`} />
              <View
                style={tw`h-24 w-px border border-dashed border-[#D2D2D2]`}
              />
            </View>
            <View style={tw`flex flex-1 flex-col rounded-lg bg-white p-4`}>
              <Text
                style={tw`-mt-[0.4375rem] mb-2 font-semibold text-custom-01`}>
                {item.placeName}
              </Text>
              <Text
                style={tw`text-xs text-custom-03`}>{`위도: ${item.latitude}`}</Text>
              <Text
                style={tw`text-xs text-custom-03`}>{`경도: ${item.longitude}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
