import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from 'app/features/account/screen/AccountScreenStyles';
import * as NavigationHelpers from 'app/navigation/NavigationHelpers';

const TAG = 'AccountScreen';

export default class AccountScreen extends Component {
  _onSettingClick() {
    console.log(TAG + ' _onSettingClick');
    NavigationHelpers.navigateToSetting();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button onPress={this._onSettingClick} title="Setting" />
      </View>
    );
  }
}
