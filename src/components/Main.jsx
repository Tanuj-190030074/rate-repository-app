import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import RepositoryDetail from './RepositoryDetail';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

const Main = () => {
  const match = useRouteMatch('/repo/:id');
  const id = match && match.params.id;

  return (
    <View>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signIn' exact>
          <SignIn />
        </Route>
        <Route path="/repo/:id">
          <RepositoryDetail id={id} />
        </Route>
        <Route path='/createReview' exact>
          <CreateReview />
        </Route>
        <Route path='/myReviews' exact>
          <UserReviews />
        </Route>
        <Route path='/signUp' exact>
          <SignUp />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;