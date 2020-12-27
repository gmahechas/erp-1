import React, { FC, useRef, useEffect } from 'react';

import { mount } from 'mf1/Mf1App';

interface IProps {}
const Mf1: FC<IProps> = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};

export default Mf1;
