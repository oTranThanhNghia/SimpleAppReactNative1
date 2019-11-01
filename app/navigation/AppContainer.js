import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import LoginScreen from 'app/features/login/screens/LoginScreen';
import HomeScreen from 'app/features/home/screens/HomeScreen';
import NewsScreen from 'app/features/news/screen/NewsScreen';
import NotificationScreen from 'app/features/notification/screen/NotificationScreen';
import AccountScreen from 'app/features/account/screen/AccountScreen';
import SettingScreen from 'app/features/setting/screen/SettingScreen';
import DetailTopHeadlinesScreen from 'app/features/detail_top_headlines/screen/DetailTopHeadlinesScreen';

import * as ScreenTypes from 'app/navigation/ScreenTypes';

import i18n from 'app/utils/i18n';
import * as StringNames from 'app/assets/locales/StringNames';

const TransitionScreen = (
  <Transition.Together>
    <Transition.Out type="slide-left" />
    <Transition.In type="slide-right" />
  </Transition.Together>
);

// https://reactnavigation.org/docs/en/bottom-tab-navigator.html
const MainAppScreens = createBottomTabNavigator(
  {
    [ScreenTypes.Home]: {
      screen: HomeScreen,
      navigationOptions: {
        title: i18n.t(StringNames.Home),
      },
    },
    [ScreenTypes.News]: {
      screen: NewsScreen,
      navigationOptions: {
        title: i18n.t(StringNames.News),
      },
    },
    [ScreenTypes.Notification]: {
      screen: NotificationScreen,
      navigationOptions: {
        title: i18n.t(StringNames.Notification),
      },
    },
    [ScreenTypes.Account]: {
      screen: AccountScreen,
      navigationOptions: {
        title: i18n.t(StringNames.Account),
      },
    },
  },
  {
    initialRouteName: ScreenTypes.Home,
  }
);

// https://reactnavigation.org/docs/en/stack-navigator.html
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
    [ScreenTypes.DetailTopHeadlines]: {
      screen: DetailTopHeadlinesScreen,
      navigationOptions: {
        title: i18n.t(StringNames.Detail),
      },
    },
  },
  {
    initialRouteName: ScreenTypes.MainAppScreens,
    defaultNavigationOptions: {
      headerBackTitle: i18n.t(StringNames.Back),
    },
    headerLayoutPreset: 'center',
  }
);

// https://reactnavigation.org/docs/en/animated-switch-navigator.html
// const MainNavigator = createAnimatedSwitchNavigator(
//   {
//     [ScreenTypes.Login]: {
//       screen: LoginScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     [ScreenTypes.GroupScreensFromMainScreen]: GroupScreensFromMainScreen,
//   },
//   {
//     initialRouteName: ScreenTypes.Login,
//     transition: TransitionScreen,
//   }
// );

const MainNavigator = createStackNavigator(
  {
    [ScreenTypes.HomeScreen]: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenTypes.DetailTopHeadlines]: {
      screen: DetailTopHeadlinesScreen,
      navigationOptions: {
        title: i18n.t(StringNames.Detail),
      },
    },
  },
  {
    initialRouteName: ScreenTypes.HomeScreen,
    defaultNavigationOptions: {
      headerBackTitle: i18n.t(StringNames.Back),
    },
    headerLayoutPreset: 'center',
  }
);

export default createAppContainer(MainNavigator);
