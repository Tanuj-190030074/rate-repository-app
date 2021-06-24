import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import theme from '../../../theme';

const styles = StyleSheet.create({
  select: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    padding: 10
  },
});

const SortCriteriaSelect = ({ setSortCriteria }) => {
  const [selected, setSelected] = useState("latest");
  //  Cannot figure out why selected return to default when tab changes.
  //  Therefore, for now make also sorting sync with what we have in select.
  setSortCriteria(selected);
  return (
    <Picker
      prompt='Select an item...'
      selectedValue={selected}
      style={styles.select}
      // eslint-disable-next-line no-unused-vars
      onValueChange={(itemValue, itemIndex) => {
        setSelected(itemValue);
        setSortCriteria(itemValue);
      }}>
      <Picker.Item label="Latest Repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

export default SortCriteriaSelect;