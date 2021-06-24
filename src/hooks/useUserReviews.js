import { useQuery } from '@apollo/react-hooks';

import { AUTHORIZED_USER } from '../graphql/queries';

const useUserReviews = (variables) => {
  const { data, loading, refetch } =
    useQuery(AUTHORIZED_USER, {
      fetchPolicy: 'cache-and-network',
      variables
    });

  return { data, loading, refetch };
};

export default useUserReviews;