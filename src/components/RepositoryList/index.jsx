import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce/lib';

import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeperator';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListHeader from './RepositoryListHeader';

export const RepositoryListContainer = ({ repositories, setSortCriteria, setSearchKeyword, onEndReached }) => {
  const history = useHistory();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={RepositoryListHeader({ setSortCriteria, setSearchKeyword })}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/repo/${item.id}`)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debounceSearchKeyword] = useDebounce(searchKeyword, 500);
  const { data, fetchMore } = useRepositories({ first: 5, orderBy, orderDirection, searchKeyword: debounceSearchKeyword });

  const setSortCriteria = (criteria) => {
    if (criteria === 'latest') {
      setOrderBy('CREATED_AT');
      setOrderDirection('DESC');
    } else if (criteria === 'highest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('DESC');
    } else {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('ASC');
    }
  };

  const onEndReached = async () => {
    await fetchMore();
  };

  return <RepositoryListContainer
    repositories={data ? data.repositories : null}
    setSortCriteria={setSortCriteria}
    setSearchKeyword={setSearchKeyword}
    onEndReached={onEndReached} />;
};

export default RepositoryList;