import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

const Auth = lazy(() => import('@mf-1/modules/auth/containers/Auth'));
const User = lazy(() => import('@mf-1/modules/user/containers/User'));

interface IProps {
    history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
    return (
        <>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/user' component={User} />
                        <Route path='/auth' component={Auth} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
};

export default Core;
