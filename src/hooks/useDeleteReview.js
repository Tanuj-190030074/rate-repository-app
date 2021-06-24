import { useMutation } from '@apollo/react-hooks';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const deleteIt = async (id) => {
    await deleteReview({ variables: { id } });
  };

  return deleteIt;
};

export default useDeleteReview;