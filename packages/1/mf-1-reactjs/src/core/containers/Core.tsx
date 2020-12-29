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
    <Router history={history}>
      <Grid container>
        <Grid item md={12}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/user' component={User} />
              <Route path='/auth' component={Auth} />
            </Switch>
          </Suspense>
        </Grid>
      </Grid>
    </Router>
  );
};

export default Core;
