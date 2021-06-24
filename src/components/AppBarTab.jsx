import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 5,
  },
});

const AppBarTab = ({ name, link, onPress }) => {
  return (
    <Link to={link} component={TouchableWithoutFeedback} onPress={onPress} >
      <Text color="appTab" fontWeight="bold" style={styles.tab}>{name}</Text>
    </Link>
  );
};

export default AppBarTab;