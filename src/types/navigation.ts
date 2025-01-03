import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationList = {
  BottomTabs: undefined;
  Tour: undefined;
  Discovery: undefined;
  Home: undefined;
  Diary: undefined;
  Mypage: undefined;
  SurveyTheme: undefined;
  SurveyContent: undefined;
  SurveyActivity: undefined;
  DiaryEditor: undefined;
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
