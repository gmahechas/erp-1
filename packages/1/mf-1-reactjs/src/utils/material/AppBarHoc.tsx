import React, { FC } from 'react';

import { AppBar, AppBarProps } from '@material-ui/core';

interface IProps extends AppBarProps {}

const AppBarHoc: FC<IProps> = ({ children, classes, color, position }) => {
  return (
    <AppBar color={color} classes={classes} position={position}>
      {children}
    </AppBar>
  );
};

export default AppBarHoc;
