import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import HeaderCore from '@mf-0/core/components/HeaderCore';

const Mf1 = lazy(() => import('@mf-0/microfrontends/Mf1'));
const Mf2 = lazy(() => import('@mf-0/microfrontends/Mf2'));

const Core = () => {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item md={12}>
          <HeaderCore />
        </Grid>
      </Grid>
      <Grid container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/mf1'>
              <Grid item md={12}>
                <Mf1 />
              </Grid>
            </Route>
            <Route path='/mf2'>
              <Grid item md={12}>
                <Mf2 />
              </Grid>
            </Route>
          </Switch>
        </Suspense>
      </Grid>
    </BrowserRouter>
  );
};

export default Core;
