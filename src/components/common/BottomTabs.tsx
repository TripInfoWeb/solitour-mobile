import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationList} from '../../types/navigation';
import {Image} from 'react-native';
import {tw} from '../../libs/tailwind';
import {COLOR} from '../../constants/color';
import {HomeScreen} from '../../screens/HomeScreen';
import {DiaryScreen} from '../../screens/DiaryScreen';
import {MypageScreen} from '../../screens/MypageScreen';
import {TourScreen} from '../../screens/TourScreen';

interface IconProps {
  focused: boolean;
}

const HomeIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('../../assets/common/home-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('../../assets/common/home.png')}
    />
  );
};

const TourIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('../../assets/common/tour-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('../../assets/common/tour.png')}
    />
  );
};

const DiaryIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('../../assets/common/diary-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('../../assets/common/diary.png')}
    />
  );
};

const ProfileIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('../../assets/common/profile-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('../../assets/common/profile.png')}
    />
  );
};

const Tab = createBottomTabNavigator<NavigationList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLOR.PRIMARY_GREEN,
        tabBarStyle: {height: 56},
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
      }}>
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
        name="Tour"
        component={TourScreen}
        options={{
          title: '내 여행',
          tabBarIcon: TourIcon,
        }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{title: '여행 일기', tabBarIcon: DiaryIcon}}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{title: '내 정보', tabBarIcon: ProfileIcon}}
      />
    </Tab.Navigator>
  );
};
