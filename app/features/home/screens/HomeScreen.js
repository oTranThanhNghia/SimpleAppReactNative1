import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'app/features/home/screens/HomeScreenStyles';

const TAG = 'HomeScreen';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
