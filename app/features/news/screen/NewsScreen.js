import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './NewsScreenStyles';
import i18n from '../../../utils/i18n';
import * as StringNames from '../../../assets/locales/StringNames';

const TAG = 'NewsScreen';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t(StringNames.News)}</Text>
      </View>
    );
  }
}
