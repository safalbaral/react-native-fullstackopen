import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barColor,
    height: 100,
    paddingLeft: 20,
    paddingRight: 20
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab tabs={[{name:'Repositories'}]} />
  </View>;
};

export default AppBar;