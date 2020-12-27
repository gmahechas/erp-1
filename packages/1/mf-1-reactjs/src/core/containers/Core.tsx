import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

const Core = () => {
  return (
    <BrowserRouter>
      <Grid container>
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
      </Grid>
    </BrowserRouter>
  );
};

export default Core;
