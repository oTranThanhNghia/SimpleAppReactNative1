import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import SplashScreen from 'app/features/splash/screen/SplashScreen';
import LoginScreen from 'app/features/login/screens/LoginScreen';

import HomeScreen from 'app/features/home/screens/HomeScreen';
import NewsScreen from 'app/features/news/screen/NewsScreen';
import NotificationScreen from 'app/features/notification/screen/NotificationScreen';
import AccountScreen from 'app/features/account/screen/AccountScreen';
import SettingScreen from 'app/features/setting/screen/SettingScreen';

import * as ScreenTypes from 'app/navigation/ScreenTypes';

const TransitionScreen = (
  <Transition.Together>
    <Transition.Out type="slide-left" />
    <Transition.In type="slide-right" />
  </Transition.Together>
);

// https://reactnavigation.org/docs/en/3.x/tab-based-navigation.html
// https://reactnavigation.org/docs/en/3.x/bottom-tab-navigator.html
const MainAppScreens = createBottomTabNavigator(
  {
    [ScreenTypes.Home]: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    [ScreenTypes.News]: {
      screen: NewsScreen,
      navigationOptions: {
        title: 'News',
      },
    },
    [ScreenTypes.Notification]: {
      screen: NotificationScreen,
      navigationOptions: {
        title: 'Notification',
      },
    },
    [ScreenTypes.Account]: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
      },
    },
  },
  {
    initialRouteName: ScreenTypes.Home,
  }
);

// https://reactnavigation.org/docs/en/3.x/stack-navigator.html
const GroupScreensFromMainScreen = createStackNavigator(
  {
    [ScreenTypes.MainAppScreens]: {
      screen: MainAppScreens,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenTypes.Setting]: {
      screen: SettingScreen,
    },
  },
  {
    initialRouteName: ScreenTypes.MainAppScreens,
  }
);

// https://reactnavigation.org/docs/en/3.x/animated-switch-navigator.html
const AnimatedSwitchNavigator = createAnimatedSwitchNavigator(
  {
    [ScreenTypes.Splash]: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenTypes.Login]: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenTypes.GroupScreensFromMainScreen]: GroupScreensFromMainScreen,
  },
  {
    initialRouteName: ScreenTypes.Splash,
    transition: TransitionScreen,
  }
);

export default createAppContainer(AnimatedSwitchNavigator);
