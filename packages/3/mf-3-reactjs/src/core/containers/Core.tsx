import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

const Country = lazy(() => import('@mf-3/modules/country/containers/Country'));
const Estate = lazy(() => import('@mf-3/modules/estate/containers/Estate'));
const City = lazy(() => import('@mf-3/modules/city/containers/City'));
const Address = lazy(() => import('@mf-3/modules/address/containers/Address'));

interface IProps {
    history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
    return (
        <>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/address' component={Address} />
                        <Route path='/city' component={City} />
                        <Route path='/estate' component={Estate} />
                        <Route path='/country' component={Country} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
};

export default Core;
