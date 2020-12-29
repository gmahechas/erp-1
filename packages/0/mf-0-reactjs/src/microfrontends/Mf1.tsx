import React, { FC, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'mf1/Mf1App';

interface IProps {}
const Mf1: FC<IProps> = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }: Location) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
    });
    history.listen(onParentNavigate);
  }, []);
  
  return <div ref={ref} />;
};

export default Mf1;
