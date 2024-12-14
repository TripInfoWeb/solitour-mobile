/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {COLORS} from './styles/colors';

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
      <View
        style={{
          position: 'relative',
          display: 'flex',
          aspectRatio: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('./assets/image.png')}
        />
        <Text
          style={{
            position: 'absolute',
            top: 80,
            textAlign: 'center',
            fontSize: 24,
            lineHeight: 33.6,
            fontWeight: 700,
          }}>
          {'00님,\n오늘은 어디로 떠날까요?'}
        </Text>
        <Pressable
          style={{
            backgroundColor: COLORS.PRIMARY_GREEN,
            position: 'absolute',
            height: 48,
            bottom: 24,
            left: 16,
            right: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
          android_ripple={{color: '#069868'}}
          onPress={() =>
            ToastAndroid.showWithGravity(
              'TODO',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            )
          }>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            AI 여행 코스 추천
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default App;
