import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {KAKAO_REST_API_KEY, KAKAO_REDIRECT_URL} from '@env';
import {ActivityIndicator, View} from 'react-native';
import {tw} from '@src/shared/lib/utils';
import {COLOR} from '@src/shared/config';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/shared/model';

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
            const url = new URL(e.url);
            const params = url.searchParams;

            if (params.get('continue')) {
              return;
            }

            const code = params.get('code');

            if (code) {
              navigation.replace('AuthLoading', {code: code});
            } else {
              navigation.goBack();
            }
          }}
        />
      )}
    </View>
  );
};
