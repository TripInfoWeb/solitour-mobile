import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DiaryDetail } from './diary';
import { Plan, SavedPlan } from './plan';

export type NavigationList = {
  BottomTabs: undefined;
  Tour: undefined;
  TourDetail: {savedPlan: SavedPlan};
  Discovery: undefined;
  DiscoveryStack: {
    screen: string;
    params: unknown;
  }
  Home: undefined;
  Diary: undefined;
  DiaryEditor: undefined;
  DiaryUpdate: {diary: DiaryDetail};
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

export type DiscoveryStackList = {
  DiscoveryDetail: {recommendation: IDiscoveryRecommendationItem}; // DiscoveryDetail 화면에 recommendation 파라미터
};

export type NavigationProps = NativeStackNavigationProp<NavigationList>;
