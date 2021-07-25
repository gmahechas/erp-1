import { FC } from 'react';
import { mount } from 'mf2/Mf2App';
import mountMF from '@mf-0/utils/hooks/mountMF';

interface IProps {}
const Mf2: FC<IProps> = () => {
  return <div ref={mountMF(mount)} />;
};

export default Mf2;
