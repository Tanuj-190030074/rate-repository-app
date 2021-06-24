const { View, StyleSheet } = require("react-native");
import React from 'react';

import theme from '../theme';

const styles = StyleSheet.create({
  separator: theme.separator,
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;