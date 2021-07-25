import { Link } from 'react-router-dom';

import FragmentHco from '@mf-3/utils/hoc/FragmentHco';

const Address = () => {
  return (
    <FragmentHco>
      <div>Address</div>
      <Link to='/country'>Link to Country</Link>
    </FragmentHco>
  );
};

export default Address;
