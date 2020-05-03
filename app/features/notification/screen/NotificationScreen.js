import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './NotificationScreenStyles';
import i18n from '../../../utils/i18n';
import * as StringNames from '../../../assets/locales/StringNames';

const TAG = 'NotificationScreen';

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t(StringNames.Notification)}</Text>
      </View>
    );
  }
}
