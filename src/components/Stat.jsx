import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const roundValue = (value) => {
  const numValue = Number(value);
  if (numValue > 1000) {
    return Math.round(numValue / 100) / 10 + "k";
  } else {
    return value;
  }
};

const Stat = ({ name, value, round = true, style }) => {
  return (
    <View style={{ ...style, ...styles.container }}>
      <Text testID={name} fontWeight='bold'>{round ? roundValue(value) : value}</Text>
      <Text>{name}</Text>
    </View >
  );
};

export default Stat;