import { Platform, Dimensions } from 'react-native';

const platform = Platform.OS;
const version = Platform.Version;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  deviceHeight,
  deviceWidth,
  platform,
  version,
};
