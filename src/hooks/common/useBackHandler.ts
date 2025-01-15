import {BackHandler} from 'react-native';

export const useBackHandler = (action: Function) => {
  const backAction = () => {
    action();
    return true;
  };

  const addBackPressEventListener = () => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  };

  const removeBackPressEventListener = () => {
    BackHandler.removeEventListener('hardwareBackPress', backAction);
  };

  return {addBackPressEventListener, removeBackPressEventListener};
};
