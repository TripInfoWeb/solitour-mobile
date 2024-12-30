import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {tw} from '@src/libs/tailwind';
import {NavigationList, NavigationProps} from '@src/types/navigation';
import {COLOR} from '@src/constants/color';
import {HomeScreen} from '@src/screens/HomeScreen';
import {TourScreen} from '@src/screens/TourScreen';
import {DiaryScreen} from '@src/screens/diary/DiaryScreen';
import {MypageScreen} from '@src/screens/MypageScreen';
import {DiscoveryScreen} from '@src/screens/DiscoveryScreen';

interface IconProps {
  focused: boolean;
}

const TourIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@src/assets/common/tour-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@src/assets/common/tour.png')}
    />
  );
};

const DiscoveryIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@src/assets/common/discovery-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@src/assets/common/discovery.png')}
    />
  );
};

const HomeIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@src/assets/common/home-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@src/assets/common/home.png')}
    />
  );
};

const DiaryIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@src/assets/common/diary-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@src/assets/common/diary.png')}
    />
  );
};

const ProfileIcon = ({focused}: IconProps) => {
  if (focused) {
    return (
      <Image
        style={tw`h-6 w-6`}
        source={require('@src/assets/common/profile-active.png')}
      />
    );
  }

  return (
    <Image
      style={tw`h-6 w-6`}
      source={require('@src/assets/common/profile.png')}
    />
  );
};

const WriteButton = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Pressable
      style={({pressed}) => {
        return tw.style([
          pressed ? 'bg-slate-100' : '',
          'mr-4 rounded-2xl p-2',
        ]);
      }}
      onPress={() => navigation.navigate('DiaryEditor')}>
      <Image
        style={tw`h-5 w-5`}
        source={require('@src/assets/diary/pencil.png')}
      />
    </Pressable>
  );
};

const Tab = createBottomTabNavigator<NavigationList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {fontSize: 20, fontWeight: 600},
        tabBarActiveTintColor: COLOR.PRIMARY_GREEN,
        tabBarStyle: {height: 56},
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
      }}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Tour"
        component={TourScreen}
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
