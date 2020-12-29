import React, { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import { Grid } from '@material-ui/core';

const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

interface IProps {
  history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
  return (
    <Grid container>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/user'>
              <User />
            </Route>
            <Route path='/auth'>
              <Auth />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Grid>
  );
};

export default Core;
