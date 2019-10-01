import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/notification/screen/NotificationScreenStyles';

const TAG = 'NotificationScreen';

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
      </View>
    );
  }
}
