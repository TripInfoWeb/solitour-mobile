import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationList = {
  Home: undefined;
  Diary: undefined;
  Mypage: undefined;
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
