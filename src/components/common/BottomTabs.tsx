import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationList} from '../../types/navigation';
import HomeScreen from '../../screens/HomeScreen';
import DiaryScreen from '../../screens/DiaryScreen';
import MypageScreen from '../../screens/MypageScreen';
import {Image} from 'react-native';
import tw from '../../libs/tailwind';
import {COLOR} from '../../constants/color';

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

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR.PRIMARY_GREEN,
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: HomeIcon,
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

export default BottomTabs;
