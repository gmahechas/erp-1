import { Link } from 'react-router-dom';

import FragmentHco from '@mf-1/utils/hoc/FragmentHco';

const Auth = () => {
    return (
        <FragmentHco>
            <div>Auth</div>
            <Link to='/user'>Link to User</Link>
        </FragmentHco>
    );
};

export default Auth;
