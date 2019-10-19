import { StyleSheet } from 'react-native';
import commonStyles from 'app/theme/Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    ...commonStyles.wrapText,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
