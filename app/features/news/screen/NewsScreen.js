import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/news/screen/NewsScreenStyles';

const TAG = 'NewsScreen';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>News Screen</Text>
      </View>
    );
  }
}
