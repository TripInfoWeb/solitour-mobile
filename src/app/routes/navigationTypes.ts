import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryDetail} from '@src/entities/diary';
import {DiscoveryRecommendationItem} from '@src/entities/discovery';
import {Plan, SavedPlan} from '@src/entities/plan';

export type RootStackParamList = {
  BottomTabs: undefined;
  Plan: undefined;
  PlanDetail: {savedPlan: SavedPlan};
  Discovery: undefined;
  DiscoveryDetail: {name: string; recommendation: DiscoveryRecommendationItem};
  Home: undefined;
  Diary: undefined;
  DiaryCreate: undefined;
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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  interface RootStackScreenProps<T extends keyof RootStackParamList> {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
  }
}
