import React from 'react';

import styles from './CorePage.module.scss';

import Mf1 from '../../../microfrontends/Mf1';
import Mf2 from '../../../microfrontends/Mf2';
import Mf3 from '../../../microfrontends/Mf3';

const CorePage = () => {

  return (
    <div className={styles.init_div}>
      <Mf1 />
      <Mf2 />
      <Mf3 />
      Fin
    </div>
  );
}

export default CorePage
