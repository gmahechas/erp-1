import FragmentHco from '@mf-1/utils/hoc/FragmentHco';
import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <FragmentHco>
      <div>User</div>
      <Link to='/auth'>Link to Auth</Link>
    </FragmentHco>
  );
};

export default User;
