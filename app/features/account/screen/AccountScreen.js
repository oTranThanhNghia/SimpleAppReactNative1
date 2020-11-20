import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './AccountScreenStyles';
import * as NavigationHelpers from '../../../navigation/NavigationHelpers';
import i18n from '../../../utils/i18n';
import * as StringNames from '../../../assets/locales/StringNames';

const TAG = 'AccountScreen';

export default class AccountScreen extends Component {
  _onSettingClick() {
    console.log(TAG + ' _onSettingClick');
    NavigationHelpers.navigateToSetting();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t(StringNames.Account)}</Text>
        <Button onPress={() => this._onSettingClick()} title={i18n.t(StringNames.Setting)} />
      </View>
    );
  }
}
