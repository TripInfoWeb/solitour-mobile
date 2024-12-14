/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './styles/globals.css';
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
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View className="relative flex aspect-square flex-col items-center">
        <Image
          className="h-full w-full"
          source={require('./assets/image.png')}
        />
        <Text className="absolute top-20 text-center text-2xl font-bold">
          {'00님,\n오늘은 어디로 떠날까요?'}
        </Text>
        <Pressable
          className="bg-primary-green ios:active:bg-primary-green-ripple absolute bottom-6 left-4 right-4 flex h-12 flex-col justify-center rounded-lg"
          android_ripple={{color: '#069868'}}
          onPress={() =>
            ToastAndroid.showWithGravity(
              'TODO',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            )
          }>
          <Text className="text-center text-lg font-semibold text-white">
            AI 여행 코스 추천
          </Text>
        </Pressable>
      </View>
      <Text
        className="border text-lg font-semibold"
        style={{backgroundColor: '#069868'}}>
        00님의 이전 여행
      </Text>
      <View>
        <Text className="border bg-teal-500 text-lg font-semibold">
          00님의 이전 여행
        </Text>
        <Text className="text-lg font-semibold">요즘 유행하는 테마 여행</Text>
      </View>
    </ScrollView>
  );
}

export default App;
