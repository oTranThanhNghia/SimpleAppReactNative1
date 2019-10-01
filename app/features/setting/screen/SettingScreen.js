import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/setting/screen/SettingScreenStyles';

const TAG = 'SettingScreen';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting Screen</Text>
      </View>
    );
  }
}
