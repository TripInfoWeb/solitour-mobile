import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Plan, SavedPlan} from './plan';

export type NavigationList = {
  BottomTabs: undefined;
  Tour: undefined;
  TourDetail: {savedPlan: SavedPlan};
  Discovery: undefined;
  Home: undefined;
  Diary: undefined;
  DiaryEditor: undefined;
  DiaryUpdate: {diaryId: number};
  Mypage: undefined;
  Auth: undefined;
  AuthSignIn: undefined;
  AuthLoading: {code: string};
  SurveyDay: undefined;
  SurveyTheme: undefined;
  SurveyContent: undefined;
  SurveyActivity: undefined;
  SurveyLoading: undefined;
  SurveyResultList: {plans: Plan[]};
  SurveyResultDetail: {index: number; plan: Plan};
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
