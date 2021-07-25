import { FC } from 'react';
import { mount } from 'mf1/Mf1App';
import mountMF from '@mf-0/utils/hooks/mountMF';

interface IProps {}
const Mf1: FC<IProps> = () => {
  return <div ref={mountMF(mount)} />;
};

export default Mf1;
