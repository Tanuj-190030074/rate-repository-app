import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native';

import theme from '../../theme';
import ItemSeparator from '../ItemSeperator';
import RepositoryItem from '../RepositoryItem';
import Text from '../Text';

const styles = StyleSheet.create({
  headerLink: {
    paddingBottom: 10,
  },
  button: theme.button
});

const RepositoryDetailHeader = ({ repo }) => {
  const onPressLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <RepositoryItem item={repo} />
      <View style={styles.headerLink}>
        <TouchableWithoutFeedback onPress={() => onPressLink(repo.url)}>
          <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Open in GitHub</Text>
        </TouchableWithoutFeedback>
      </View>
      <ItemSeparator />
    </View>
  );
};

export default RepositoryDetailHeader;