import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/setting/screen/SettingScreenStyles';
import i18n from 'app/utils/i18n';
import * as StringNames from 'app/assets/locales/StringNames';

const TAG = 'SettingScreen';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t(StringNames.Setting)}</Text>
      </View>
    );
  }
}
