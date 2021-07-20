import React from 'react';
import { Link } from 'react-router-dom';

import FragmentHco from '@mf-1/utils/hoc/FragmentHco';

const User = () => {
    return (
        <FragmentHco>
            <div>User</div>
            <Link to='/auth'>Link to Auth</Link>
        </FragmentHco>
    );
};

export default User;
