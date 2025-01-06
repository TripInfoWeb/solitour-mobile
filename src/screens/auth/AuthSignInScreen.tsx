import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {KAKAO_REST_API_KEY, KAKAO_REDIRECT_URL} from '@env';
import {ActivityIndicator, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {COLOR} from '@src/constants/color';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/types/navigation';

export const AuthSignInScreen = () => {
  const [loading, setLoading] = useState(true);
  const [webViewVisible, setWebViewVisible] = useState(true);
  const timestamp = new Date().toISOString();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={tw`flex flex-1 flex-col`}>
      {loading && (
        <ActivityIndicator
          style={tw`h-full`}
          size={50}
          color={COLOR.PRIMARY_GREEN}
        />
      )}
      {webViewVisible && (
        <WebView
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&timestamp=${timestamp}`,
          }}
          onLoadEnd={() => setLoading(false)}
          onError={() => setWebViewVisible(false)}
          onNavigationStateChange={e => {
            const code = e.url.split('?')[1].slice(5);
            navigation.replace('AuthLoading', {code});
          }}
        />
      )}
    </View>
  );
};
