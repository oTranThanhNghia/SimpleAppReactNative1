// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navogatorRef) {
  _navigator = navogatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(NavigationActions.navigate({routeName, params}));
}

function goBack(key) {
  _navigator.dispatch(NavigationActions.back({key: key}));
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
