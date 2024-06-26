import {Platform, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN} from '../enums/AppEnums';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchResults from '../screens/Home/SearchResults';
import History from '../screens/History/History';
import Profile from '../screens/User/Profile';
import {COLOR, FONT} from '../enums/StyleGuide'
import {
  Home,
    Home_Active,
    Astro,
    Astro_Active,
    History_,
    History_Active,
    User,
    User_Active
} from '../assets/svg/tabBar'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {},
        tabBarStyle: {
          height: Platform.OS === "ios" ? 70 : 60,
          backgroundColor: COLOR.white,
          borderTopWidth: 0,
          elevation: 0,
          marginTop: 0,
        },
      }}>
      <Tab.Screen
        name={SCREEN.HOME}
        component={HomeScreen}
        options={{
          title: "Home",
          ...TabbarOptions,
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Home_Active width={20} height={20} />
            ) : (
              <Home width={20} height={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREEN.SEARCHRESULTS}
        component={SearchResults}
        options={{
          title: "Astroconsult",
          ...TabbarOptions,
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Astro_Active width={20} height={20} />
            ) : (
              <Astro width={20} height={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREEN.HISTORY}
        component={History}
        options={{
          title: "History",
          ...TabbarOptions,
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <History_Active width={20} height={20} />
            ) : (
              <History_ width={20} height={20} />
            );
          },
          
        }}
      />
      <Tab.Screen
        name={SCREEN.USER}
        component={Profile}
        options={{
          title: "Profile",
          ...TabbarOptions,
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <User_Active width={20} height={20} />
            ) : (
              <User width={20} height={20} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const TabbarOptions = {
  tabBarActiveTintColor: COLOR.tabBarInavtive,
  tabBarInactiveTintColor: COLOR.lineColor,
  tabBarLabelStyle: {
    fontSize: 14,
    fontFamily: FONT.Satoshi_Bold,
    bottom: 5,
  },
};

export default TabNavigator;
