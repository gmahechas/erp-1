import React from 'react';
import { Link } from 'react-router-dom';

import FragmentHco from '@mf-2/utils/hoc/FragmentHco';

const Country = () => {
  return (
    <FragmentHco>
      <div>Country</div>
      <Link to='/estate'>Link to Estate</Link>
    </FragmentHco>
  );
};

export default Country;
