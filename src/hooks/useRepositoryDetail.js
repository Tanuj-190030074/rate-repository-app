import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY_DETAIL } from '../graphql/queries';

const useRepositoryDetail = (id) => {
  if (!id) {
    return { data: null, loading: false };
  }
  const { data, loading } =
    useQuery(GET_REPOSITORY_DETAIL, {
      fetchPolicy: 'cache-and-network',
      variables: { id },
    });

  return { data, loading };
};

export default useRepositoryDetail;