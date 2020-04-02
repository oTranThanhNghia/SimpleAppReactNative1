/**
 * @format
 */
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/crashlytics';
import '@react-native-firebase/analytics';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
