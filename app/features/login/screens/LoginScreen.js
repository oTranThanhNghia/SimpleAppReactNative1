/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './LoginScreenStyles';
import * as loginActions from '../actions';
import { getLoginState } from '../selectors';

import i18n from '../../../utils/i18n';
import * as StringNames from '../../../assets/locales/StringNames';
import env from '../../../config/environment';
// import SplashScreenNative from 'react-native-splash-screen';

const TAG = 'LoginScreen';
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
// https://flow.org/en/docs/react/components/

class LoginScreen extends Component {
  // componentDidMount() {
  //   SplashScreenNative.hide();
  // }

  // https://medium.com/@User3141592/react-gotchas-and-best-practices-2d47fd67dd22
  loginClick() {
    console.log(TAG + ' loginClick ');
    this.props.onLogin('nghia', '123456');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Text>Status: {this.props.status}</Text>
        <Text>Base_Url: {env.BASE_URL}</Text>
        <Button onPress={() => this.loginClick()} title={i18n.t(StringNames.Login)} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(TAG + ' mapStateToProps ' + JSON.stringify(state));
  return {
    status: getLoginState(state),
  };
}

function mapDispatchToProps(dispatch) {
  console.log(TAG + ' mapDispatchToProps ');
  return {
    onLogin: (username, password) => dispatch(loginActions.requestLogin(username, password)),
  };
}

// https://react-redux.js.org/api/connect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
