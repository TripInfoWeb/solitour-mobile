import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationList} from '../../types/navigation';
import HomeScreen from '../../screens/HomeScreen';
import DiaryScreen from '../../screens/DiaryScreen';
import MypageScreen from '../../screens/MypageScreen';

const Tab = createBottomTabNavigator<NavigationList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: '홈'}} />
      <Tab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{title: '여행 일기'}}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{title: '내 정보'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
