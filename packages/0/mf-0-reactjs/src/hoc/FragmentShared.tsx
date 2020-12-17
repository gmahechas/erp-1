import React, { FC } from 'react';

interface IProps {}
const FragmentShared: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default FragmentShared;
