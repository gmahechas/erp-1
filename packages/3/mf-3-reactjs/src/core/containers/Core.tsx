import { FC, lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

import { Provider } from 'react-redux';
import { reducers as countryReducers } from '../../modules/country/store/reducers';
import createStore from '../store';
const store = createStore();

const Country = lazy(() =>
    import('@mf-3/modules/country/containers/Country').then((module) => {
        store.injectReducer('country', countryReducers);
        return { default: module.default };
    })
);
const Estate = lazy(() =>
    import('@mf-3/modules/estate/containers/Estate').then((module) => {
        return { default: module.default };
    })
);
const City = lazy(() =>
    import('@mf-3/modules/city/containers/City').then((module) => {
        return { default: module.default };
    })
);
const Address = lazy(() =>
    import('@mf-3/modules/address/containers/Address').then((module) => {
        return { default: module.default };
    })
);

interface IProps {
    history: History | MemoryHistory;
}

const Core: FC<IProps> = ({ history }) => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default Core;
