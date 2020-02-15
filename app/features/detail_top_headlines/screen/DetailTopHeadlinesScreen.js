import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import styles from './DetailTopHeadlinesScreenStyles';
import ProgressBar from 'react-native-progress/Bar';

import { firebase } from '@react-native-firebase/crashlytics';

const TAG = 'DetailTopHeadlinesScreen';
type Props = {
  navigation: any,
};

export default class DetailTopHeadlinesScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { percent: 0, visible: false };
  }

  onRenderError(errorDomain, errorCode, errorDesc) {
    return (
      <View style={styles.error}>
        <Text style={{}}>Webpage not available</Text>
      </View>
    );
  }

  onLoadStart(event) {
    // console.log('1=====> onLoadStart nativeEvent= ' + JSON.stringify(event.nativeEvent));

    // crash app
    // firebase.crashlytics().log('Testing crash');
    // firebase.crashlytics().crash();
    this.setState({ visible: true, percent: 0 });
  }

  onLoadEnd(event) {
    // console.log('3=====> onLoadEnd nativeEvent= ' + JSON.stringify(event.nativeEvent));
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
    }, 500);
  }

  onLoadProgress(event) {
    // console.log('2=====> onLoadProgress nativeEvent= ' + JSON.stringify(event.nativeEvent));
    this.setState({ percent: event.nativeEvent.progress });
  }

  onError(event) {
    this.setState({ percent: 1 });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam('data', '');
    console.log(TAG + ' render() navigation= ' + JSON.stringify(navigation));
    return (
      <View style={{ flex: 1 }}>
        {this.state.visible && (
          <View>
            <ProgressBar progress={this.state.percent} width={null} height={1} borderRadius={0} />
            <Text>{this.state.percent}</Text>
          </View>
        )}
        <WebView
          source={{ uri: uri }}
          startInLoadingState={false}
          onLoadStart={(event) => this.onLoadStart(event)}
          onLoadProgress={(event) => this.onLoadProgress(event)}
          onLoadEnd={(event) => this.onLoadEnd(event)}
          onError={(event) => this.onError(event)}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          cacheEnabled={true}
          cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
          renderError={(errorDomain, errorCode, errorDesc) =>
            this.onRenderError(errorDomain, errorCode, errorDesc)
          }
        />
      </View>
    );
  }
}
