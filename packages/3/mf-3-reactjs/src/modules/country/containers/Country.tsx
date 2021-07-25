import { Link } from 'react-router-dom';

import FragmentHco from '@mf-3/utils/hoc/FragmentHco';

const Country = () => {
  return (
    <FragmentHco>
      <div>Country</div>
      <Link to='/estate'>Link Estate</Link>
    </FragmentHco>
  );
};

export default Country;
