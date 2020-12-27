import React, { FC, useRef, useEffect } from 'react';

import { mount } from 'mf2/Mf2App';

interface IProps {}
const Mf2: FC<IProps> = () => {
    const ref = useRef(null);
    useEffect(() => {
      mount(ref.current);
    }, []);
    return <div ref={ref} />;
};

export default Mf2;
