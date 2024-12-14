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
  TouchableOpacity,
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
          className="bg-primary-green absolute bottom-6 left-4 right-4 flex h-12 flex-col justify-center rounded-lg active:bg-teal-200"
          onPress={() =>
            ToastAndroid.showWithGravity(
              'TEST',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            )
          }>
          <Text className="text-center text-lg font-semibold text-white">
            AI 여행 코스 추천
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default App;
