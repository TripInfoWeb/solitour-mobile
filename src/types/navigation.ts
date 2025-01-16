import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Plan} from './plan';

export type NavigationList = {
  BottomTabs: undefined;
  Tour: undefined;
  Discovery: undefined;
  Home: undefined;
  Diary: undefined;
  DiaryEditor: undefined;
  DiaryUpdate: {diaryId: number};
  Mypage: undefined;
  Auth: undefined;
  AuthSignIn: undefined;
  AuthLoading: {code: string};
  SurveyTheme: undefined;
  SurveyContent: undefined;
  SurveyActivity: undefined;
  SurveyLoading: undefined;
  SurveyResultList: undefined;
  SurveyResultDetail: {index: number; plan: Plan};
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
