import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import SplashScreenNative from 'react-native-splash-screen';

const TAG = 'LoaderScreen';

type Props = {};

export default class LoaderScreen extends Component<Props> {
  componentDidMount() {
    console.log(TAG + ' hide SplashScreen');
    SplashScreenNative.hide();
  }

  render() {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }
}
