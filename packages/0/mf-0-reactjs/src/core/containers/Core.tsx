import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import HeaderCore from '@mf-0/core/components/HeaderCore';
import Dashboard from '@mf-0/core/containers/Dashboard';

const Auth = lazy(() => import('@mf-0/modules/1/auth/containers/Auth'));
const User = lazy(() => import('@mf-0/modules/1/user/containers/User'));

const Core = () => {
  return (
    <Grid container>
      <BrowserRouter>
        <Grid item md={12}>
          <HeaderCore />
        </Grid>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/user'>
              <Grid item md={12}>
                <User />
              </Grid>
            </Route>
            <Route path='/auth'>
              <Grid item md={12}>
                <Auth />
              </Grid>
            </Route>
            <Route path='/'>
              <Grid item md={12}>
                <Dashboard />
              </Grid>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Grid>
  );
};

export default Core;
