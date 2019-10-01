import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from 'app/features/login/screens/LoginScreenStyles';
import * as NavigationHelpers from 'app/navigation/NavigationHelpers';

const TAG = 'LoginScreen';

export default class LoginScreen extends Component {
  _loginClick() {
    console.log(TAG + ' loginClick');
    NavigationHelpers.navigateToMainAppScreens();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button onPress={this._loginClick} title="Click" />
      </View>
    );
  }
}
