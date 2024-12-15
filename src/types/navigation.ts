import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationList = {
  BottomTabs: undefined;
  Home: undefined;
  Tour: undefined;
  Diary: undefined;
  Mypage: undefined;
  Survey: undefined;
  DiaryEditor: undefined;
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
