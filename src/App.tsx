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
  StyleSheet,
  Text,
  ToastAndroid,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './styles/colors';
import tw from 'twrnc';

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    aspectRatio: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageTitle: {
    top: 80,
    position: 'absolute',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 33.6,
    fontWeight: 700,
  },
  imageButton: {
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
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={backgroundStyle}>
      <Text style={tw`mt-3 flex items-center justify-center bg-blue-100 p-1`}>
        TEST!
      </Text>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/image.png')} />
        <Text style={styles.imageTitle}>
          {'00님,\n오늘은 어디로 떠날까요?'}
        </Text>
        <Pressable
          style={styles.imageButton}
          android_ripple={{color: '#069868'}}
          onPress={() =>
            ToastAndroid.showWithGravity(
              'TODO',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default App;
