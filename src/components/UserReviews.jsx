import React from 'react';
import { FlatList } from 'react-native';

import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeperator';
import useUserReviews from '../hooks/useUserReviews';
import useDeleteReview from '../hooks/useDeleteReview';

export const ReviewListContainer = ({ reviews, deleteReview }) => {

  // Get the nodes from the edges array
  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <ReviewItem review={item} showUser={false} deleteReview={deleteReview} />
      )}
    />
  );
};

const UserReviews = () => {
  const { data, loading, refetch } = useUserReviews({ includeReviews: true });
  const deleteTheReview = useDeleteReview();

  const deleteReview = (id) => {
    deleteTheReview(id);
    refetch();
  };

  return <ReviewListContainer reviews={(!loading && data) ? data.authorizedUser.reviews : null} deleteReview={deleteReview} />;
};

export default UserReviews;