import { Link } from 'react-router-dom';

import FragmentHco from '@mf-3/utils/hoc/FragmentHco';

const City = () => {
  return (
    <FragmentHco>
      <div>City</div>
      <Link to='/address'>Link to Address</Link>
    </FragmentHco>
  );
};

export default City;
