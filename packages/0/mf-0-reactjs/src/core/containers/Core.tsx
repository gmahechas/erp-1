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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/auth' component={Mf1} />
          <Route path='/user' component={Mf1} />
          <Route path='/' component={Mf2} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Core;
