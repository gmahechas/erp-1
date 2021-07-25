import { Link } from 'react-router-dom';

import FragmentHco from '@mf-3/utils/hoc/FragmentHco';

const Estate = () => {
  return (
    <FragmentHco>
      <div>Estate</div>
      <Link to='/city'>Link to City</Link>
    </FragmentHco>
  );
};

export default Estate;
