import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };

  return signOut;
};

export default useSignOut;