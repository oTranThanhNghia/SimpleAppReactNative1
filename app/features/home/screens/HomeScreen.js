import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/home/screens/HomeScreenStyles';
import i18n from 'app/utils/i18n';
import * as StringNames from 'app/assets/locales/StringNames';

const TAG = 'HomeScreen';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t(StringNames.Home)}</Text>
      </View>
    );
  }
}
