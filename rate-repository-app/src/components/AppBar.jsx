import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';

import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barColor,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const AppBar = () => {
  const tabs = [
    {
      name: 'Repositories',
      link: '/'
    },
    {
      name: 'Sign In',
      link: 'signin'
    }
  ]
  return (
  <View style={styles.container}>
    <AppBarTab tabs={tabs} />
  </View>
  )
};

export default AppBar;