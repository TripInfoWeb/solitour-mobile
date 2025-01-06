import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/types/navigation';
import {tw} from '@src/libs/tailwind';
import {PrimaryButton} from '@src/components/common/PrimaryButton';
import {useAuthStore} from '@src/stores/authStore';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {nickname} = useAuthStore();

  return (
    <ScrollView style={tw`bg-white`}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lighter} />
      <View style={tw`relative flex aspect-square flex-col items-center`}>
        <Image
          style={tw`h-full w-full`}
          source={require('@src/assets/home/main.png')}
        />
        <Image
          style={tw`absolute top-0 h-1/2 w-full`}
          source={require('@src/assets/home/filter.png')}
        />
        <Text style={tw`absolute top-[23%] text-center text-2xl font-bold`}>
          {`${nickname}님,\n오늘은 어디로 떠날까요?`}
        </Text>
        <PrimaryButton
          title="AI 콘텐츠 여행 추천"
          onPress={() => navigation.navigate('SurveyTheme')}
        />
      </View>
      <View style={tw`flex flex-col gap-14 px-4 py-14`}>
        <View style={tw`flex flex-col gap-3.5`}>
          <Text
            style={tw`text-lg font-semibold`}>{`${nickname}님의 이전 여행`}</Text>
          <ScrollView
            contentContainerStyle={tw`flex gap-2.5`}
            horizontal={true}>
            <View style={tw`h-40 w-40 rounded-lg bg-gray-100`} />
            <View style={tw`h-40 w-40 rounded-lg bg-gray-100`} />
            <View style={tw`h-40 w-40 rounded-lg bg-gray-100`} />
          </ScrollView>
        </View>
        <View style={tw`flex flex-col gap-3.5`}>
          <Text style={tw`text-lg font-semibold`}>요즘 유행하는 테마 여행</Text>
          <ScrollView
            contentContainerStyle={tw`flex gap-1.5`}
            horizontal={true}>
            <Pressable
              onPress={() => navigation.navigate('Diary')}
              style={({pressed}) => {
                return tw.style([
                  pressed ? 'bg-primary-green-ripple' : 'bg-primary-green',
                  'rounded-full px-5 py-3',
                ]);
              }}>
              <Text style={tw`font-semibold text-white`}>#빵지순례</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => {
                return tw.style([
                  pressed ? 'bg-gray-100' : 'bg-white',
                  'rounded-full border border-gray-200 px-5 py-3',
                ]);
              }}
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'TODO',
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                )
              }>
              <Text style={tw`font-semibold`}>#촌캉스</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => {
                return tw.style([
                  pressed ? 'bg-gray-100' : 'bg-white',
                  'rounded-full border border-gray-200 px-5 py-3',
                ]);
              }}>
              <Text style={tw`font-semibold`}>#셀럽 PICK</Text>
            </Pressable>
          </ScrollView>
          <Image
            style={tw`h-64 w-full rounded-xl`}
            source={require('@src/assets/home/main.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
