import React, { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import { Grid } from '@material-ui/core';

const Country = lazy(() => import('@mf-2/modules/country/containers/Country'));
const Estate = lazy(() => import('@mf-2/modules/estate/containers/Estate'));
const City = lazy(() => import('@mf-2/modules/city/containers/City'));
const Address = lazy(() => import('@mf-2/modules/address/containers/Address'));

interface IProps {
  history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
  return (
    <Grid container>
      <Router history={history}>
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
            <Route path='/country'>
              <Country />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Grid>
  );
};

export default Core;
