import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/shared/lib/utils';
import {RootStackParamList} from '@src/shared/model';
import {COLOR} from '@src/shared/config';
import {HomeScreen} from '@src/pages/home';
import {PlanScreen} from '@src/pages/plan';
import {DiaryScreen} from '@src/pages/diary';
import {MypageScreen} from '@src/pages/mypage';
import {DiscoveryScreen} from '@src/pages/discovery';

interface IconProps {
  focused: boolean;
}

const TourIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@assets/common/tour-active.png')}
      />
    );
  }

  return (
    <Image style={tw`h-6 w-6`} source={require('@assets/common/tour.png')} />
  );
};

const DiscoveryIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@assets/common/discovery-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@assets/common/discovery.png')}
    />
  );
};

const HomeIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@assets/common/home-active.png')}
      />
    );
  }

  return (
    <Image style={tw`h-6 w-6`} source={require('@assets/common/home.png')} />
  );
};

const DiaryIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@assets/common/diary-active.png')}
      />
    );
  }

  return (
    <Image style={tw`h-6 w-6`} source={require('@assets/common/diary.png')} />
  );
};

const ProfileIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@assets/common/profile-active.png')}
      />
    );
  }

  return (
    <Image style={tw`h-6 w-6`} source={require('@assets/common/profile.png')} />
  );
};

const WriteButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) =>
        tw.style(pressed && 'bg-slate-100', 'mr-4 rounded-2xl p-2')
      }
      onPress={() => navigation.navigate('DiaryCreate')}>
      <Image style={tw`h-5 w-5`} source={require('@assets/diary/pencil.png')} />
    </Pressable>
  );
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {fontSize: 20, fontWeight: 600},
        tabBarActiveTintColor: COLOR.PRIMARY_GREEN,
        tabBarStyle: {height: 56},
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
        headerShadowVisible: false,
      }}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          title: '내 여행',
          tabBarIcon: TourIcon,
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          title: '발견',
          tabBarIcon: DiscoveryIcon,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          title: '여행일기',
          headerRight: WriteButton,
          tabBarIcon: DiaryIcon,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{title: '내 정보', tabBarIcon: ProfileIcon}}
      />
    </Tab.Navigator>
  );
};
