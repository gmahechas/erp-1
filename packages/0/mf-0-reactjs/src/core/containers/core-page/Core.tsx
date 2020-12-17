import React from 'react';

import { Grid, Container } from '@material-ui/core';

import Mf1 from '@mf-1/microfrontends/Mf1';
import Mf2 from '@mf-1/microfrontends/Mf2';
import Mf3 from '@mf-1/microfrontends/Mf3';
import HeaderCore from '@mf-1/core/components/HeaderCore';
import FragmentHco from '@mf-1/utils/hoc/FragmentHco';

const Core = () => {
  return (
    <FragmentHco>
      <Grid container>
        <Grid item md={12}>
          <HeaderCore />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Mf1 />
        </Grid>
        <Grid item md={4}>
          <Mf2 />
        </Grid>
        <Grid item md={4}>
          <Mf3 />
          <a href="#">Hola a todos</a>
        </Grid>
      </Grid>
    </FragmentHco>
  );
};

export default Core;
