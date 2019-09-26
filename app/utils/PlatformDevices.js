import {Platform, Dimensions, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const platform = Platform.OS;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const isIphoneWithNotch = platform === 'ios' && DeviceInfo.hasNotch;
const isAndroidWithNotch =
  platform === 'android' && StatusBar.currentHeight > 24;

export default {
  deviceHeight,
  deviceWidth,
  isIphoneWithNotch,
  isAndroidWithNotch,
  platform,
};
