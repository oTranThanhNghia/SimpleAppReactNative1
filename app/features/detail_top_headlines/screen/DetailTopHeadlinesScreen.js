import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './DetailTopHeadlinesScreenStyles';

const TAG = 'DetailTopHeadlinesScreen';
type Props = {
  navigation: any,
};

export default class DetailTopHeadlinesScreen extends Component<Props> {
  onRenderLoading() {
    return <ActivityIndicator style={styles.loading} />;
  }

  onRenderError(errorDomain, errorCode, errorDesc) {
    return (
      <View style={styles.error}>
        <Text style={{}}>Webpage not available</Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam('data', '');
    console.log(TAG + ' render() navigation= ' + JSON.stringify(navigation));
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: uri }}
          startInLoadingState={true}
          renderLoading={() => this.onRenderLoading()}
          cacheEnabled={true}
          cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
          renderError={(errorDomain, errorCode, errorDesc) =>
            this.onRenderError(errorDomain, errorCode, errorDesc)
          }
        />
      </SafeAreaView>
    );
  }
}
