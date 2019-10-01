import React, { Component } from 'react';
import AppContainer from 'app/navigation/AppContainer';
import NavigationService from 'app/navigation/NavigationService';

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
