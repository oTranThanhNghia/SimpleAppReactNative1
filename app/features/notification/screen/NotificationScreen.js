import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/notification/screen/NotificationScreenStyles';
import i18n from 'app/utils/i18n';
import * as StringNames from 'app/assets/locales/StringNames';

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
