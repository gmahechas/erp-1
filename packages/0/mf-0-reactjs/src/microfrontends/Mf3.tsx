import { FC } from 'react';
import { mount } from 'mf3/Mf3App';
import mountMF from '@mf-0/utils/hooks/mountMF';

interface IProps {}
const Mf3: FC<IProps> = () => {
    return <div ref={mountMF(mount)} />;
};

export default Mf3;
