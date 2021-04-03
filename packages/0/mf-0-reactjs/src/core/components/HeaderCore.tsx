import React from 'react';
import { Link } from 'react-router-dom';

import FragmentHco from '@mf-0/utils/hoc/FragmentHco';
import AppBarHoc from '@mf-0/utils/material/AppBarHoc';
import ToolBarHoc from '@mf-0/utils/material/ToolBarHoc';

const HeaderCore = () => {
  return (
      <FragmentHco>
          <AppBarHoc position='static'>
              <ToolBarHoc variant='dense' disableGutters>
                  <Link to='/'>Inicio | </Link>
                  <Link to='/auth'>Auth | </Link>
                  <Link to='/user'>User</Link>
                  <Link to='/user'>User | </Link>
                  <Link to='/country'>Country | </Link>
                  <Link to='/estate'>Estate | </Link>
                  <Link to='/city'>City | </Link>
                  <Link to='/address'>Address</Link>
              </ToolBarHoc>
          </AppBarHoc>
      </FragmentHco>
  );
};

export default HeaderCore;
