import { StyleSheet } from 'react-native';
import theme from '../../../theme';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    paddingTop: Constants.statusBarHeight,
  },
  timer: {
    color: theme.colors.primary,
    fontSize: 100,
    fontFamily: theme.fonts.numeric,
  },
  completed: {
    fontFamily: theme.fonts.numeric,
    color: theme.colors.primary,
    fontSize: 24,
    alignSelf: 'flex-end',
  },
  sound: {
    marginTop: theme.spacing(2),
    alignSelf: 'flex-end',
  },
  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
