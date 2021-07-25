import { FC } from 'react';

import { Toolbar, ToolbarProps } from '@material-ui/core';

interface IProps extends ToolbarProps {}

const ToolBarHoc: FC<IProps> = ({
  children,
  classes,
  disableGutters,
  variant,
}) => {
  return (
    <Toolbar
      classes={classes}
      disableGutters={disableGutters}
      variant={variant}
    >
      {children}
    </Toolbar>
  );
};

export default ToolBarHoc;
