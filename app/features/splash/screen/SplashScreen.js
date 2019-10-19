import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlatformDevices from 'app/utils/PlatformDevices';
import styles from 'app/features/splash/screen/SplashScreenStyles';
import * as NavigationHelpers from 'app/navigation/NavigationHelpers';

const TAG = 'SplashScreen';

export default class SplashScreen extends Component {
  componentDidMount() {
    console.log(TAG + ' componentDidMount');
    setTimeout(() => {
      NavigationHelpers.navigateToLogin();
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Logo App</Text>
        <Text>Platform: {PlatformDevices.platform}</Text>
        <Text>Version OS: {PlatformDevices.version} </Text>
      </View>
    );
  }
}
