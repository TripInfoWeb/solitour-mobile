import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NetInfoProvider, QueryProvider} from './providers';
import {Navigation} from './routes';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NetInfoProvider>
      <QueryProvider>
        <GestureHandlerRootView>
          <Navigation />
        </GestureHandlerRootView>
      </QueryProvider>
    </NetInfoProvider>
  );
};
