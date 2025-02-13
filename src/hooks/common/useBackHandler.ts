import {useCallback} from 'react';
import {BackHandler} from 'react-native';

export const useBackHandler = (action: Function) => {
  const backAction = useCallback(() => {
    action();
    return true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBackPressEventListener = useCallback(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, [backAction]);

  const removeBackPressEventListener = useCallback(() => {
    BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [backAction]);

  return {addBackPressEventListener, removeBackPressEventListener};
};
