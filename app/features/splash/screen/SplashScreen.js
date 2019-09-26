import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlatformDevices from 'app/utils/PlatformDevices';

export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Text> Logo App</Text>
        <Text>
          Platform: {PlatformDevices.platform.OS} with{' '}
          {PlatformDevices.platform.OS === 'ios'
            ? PlatformDevices.isIphoneWithNotch
            : PlatformDevices.isAndroidWithNotch}
        </Text>
        <Text>Version: {PlatformDevices.Version} </Text>
      </View>
    );
  }
}
