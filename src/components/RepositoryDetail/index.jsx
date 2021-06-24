import React from 'react';
import { FlatList } from 'react-native';
import useRepositoryDetail from '../../hooks/useRepositoryDetail';

import ItemSeparator from '../ItemSeperator';
import RepositoryDetailHeader from './RepositoryDetailHeader';
import ReviewItem from '../ReviewItem';

const RepositoryDetail = ({ id }) => {
  const { data, loading } = useRepositoryDetail(id);

  if (!id || loading || !data) {
    return null;
  }

  return (
    <FlatList
      data={data.repository.reviews.edges.map(edge => edge.node)}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} showUser={true} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryDetailHeader repo={data.repository} />}
    />
  );
};

export default RepositoryDetail;