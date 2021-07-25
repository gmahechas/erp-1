import { Link } from 'react-router-dom';

import FragmentHco from '@mf-0/utils/hoc/FragmentHco';

const HeaderCore = () => {
    return (
        <FragmentHco>
            <Link to='/'>Inicio | </Link>
            <Link to='/auth'>Auth | </Link>
            <Link to='/user'>User | </Link>
            <Link to='/country'>Country | </Link>
            <Link to='/estate'>Estate | </Link>
            <Link to='/city'>City | </Link>
            <Link to='/address'>Address</Link>
        </FragmentHco>
    );
};

export default HeaderCore;
