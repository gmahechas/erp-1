import React, { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import { Grid } from '@material-ui/core';

const Dashboard = lazy(() => import('@mf-2/modules/dashboard/Dashboard'));

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
              <Route path='/' component={Dashboard} />
            </Switch>
          </Suspense>
        </Grid>
      </Grid>
    </Router>
  );
};

export default Core;
