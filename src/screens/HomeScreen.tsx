import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  useColorScheme,
  View,
} from 'react-native';
import tw from '../libs/tailwind';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLOR} from '../constants/color';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={tw`bg-white`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={tw`relative flex aspect-square flex-col items-center`}>
        <Image
          style={tw`h-full w-full`}
          source={require('./assets/main.png')}
        />
        <Image
          style={tw`absolute top-0 h-1/2 w-full`}
          source={require('./assets/filter.png')}
        />
        <Text style={tw`absolute top-20 text-center text-2xl font-bold`}>
          {'OO님,\n오늘은 어디로 떠날까요?'}
        </Text>
        <Pressable
          style={({pressed}) => {
            return tw.style([
              pressed
                ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                : 'bg-primary-green',
              'absolute bottom-6 left-4 right-4 flex h-12 items-center justify-center rounded-lg',
            ]);
          }}
          android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}
          onPress={() =>
            ToastAndroid.showWithGravity(
              'TODO',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            )
          }>
          <Text style={tw`text-lg font-semibold text-white`}>
            AI 여행 코스 추천
          </Text>
        </Pressable>
      </View>
      <View style={tw`flex flex-col gap-14 px-4 py-14`}>
        <View style={tw`flex flex-col gap-3.5`}>
          <Text style={tw`text-lg font-semibold`}>OO님의 이전 여행</Text>
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
              }}>
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
            source={require('./assets/main.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
