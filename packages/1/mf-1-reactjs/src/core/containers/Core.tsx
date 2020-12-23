import React from 'react';

import { Grid } from '@material-ui/core';

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
        MF 1
      </Grid>
    </FragmentHco>
  );
};

export default Core;
