import NavigationService from 'app/navigation/NavigationService';
import * as ScreenTypes from 'app/navigation/ScreenTypes';

export function navigateToHome(params) {
  NavigationService.navigate(ScreenTypes.Home, params);
}

export function navigateToMainAppScreens(params) {
  NavigationService.navigate(ScreenTypes.GroupScreensFromMainScreen, params);
}

export function navigateToLogin(params) {
  NavigationService.navigate(ScreenTypes.Login, params);
}

export function navigateToSplash(params) {
  NavigationService.navigate(ScreenTypes.Splash, params);
}

export function navigateToSetting(params) {
  NavigationService.navigate(ScreenTypes.Setting, params);
}

export function navigateToDetailHeadlines(params) {
  NavigationService.navigate(ScreenTypes.DetailTopHeadlines, params);
}
