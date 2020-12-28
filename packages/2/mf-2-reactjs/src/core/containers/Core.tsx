import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

const Country = lazy(() => import('@mf-2/modules/country/containers/Country'));
const Estate = lazy(() => import('@mf-2/modules/estate/containers/Estate'));
const City = lazy(() => import('@mf-2/modules/city/containers/City'));
const Address = lazy(() => import('@mf-2/modules/address/containers/Address'));

const Core = () => {
  return (
    <Grid container>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/address'>
              <Address />
            </Route>
            <Route path='/city'>
              <City />
            </Route>
            <Route path='/estate'>
              <Estate />
            </Route>
            <Route path='/'>
              <Country />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Grid>
  );
};

export default Core;
