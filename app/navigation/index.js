import React, { Component } from 'react';
import AppContainer from './AppContainer';
import NavigationService from './NavigationService';

export default class AppNavigator extends Component {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
