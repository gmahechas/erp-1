import React, { FC } from 'react';

import { Button, ButtonProps } from '@material-ui/core';

interface IProps extends ButtonProps {}

const ButtonHoc: FC<IProps> = ({
  children,
  classes,
  color,
  disabled,
  size,
  variant,
}) => {
  return (
    <Button
      classes={classes}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ButtonHoc;
