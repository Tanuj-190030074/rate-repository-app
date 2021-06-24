import React from 'react';
import { StyleSheet, View } from 'react-native';

import Search from './Search';
import SortCriteriaSelect from './SortCriteriaSelect';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'stretch',
  },
});

const RepositoryListHeader = ({ setSortCriteria, setSearchKeyword }) => {
  return (
    <View style={styles.header}>
      <Search setSearchKeyword={setSearchKeyword} />
      <SortCriteriaSelect setSortCriteria={setSortCriteria} />
    </View>
  );
};

export default RepositoryListHeader;