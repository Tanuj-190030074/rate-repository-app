import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  item: {
    flexGrow: 0,
    borderRadius: 5,
    padding: 5,
  },
});

const Tag = ({ text, style }) => {
  return (
    <View style={styles.container}>
      <Text testID='language' color='tag' style={{ ...styles.item, ...style }}>{text}</Text>
    </View>
  );
};

export default Tag;