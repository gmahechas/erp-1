import { createStore, combineReducers, applyMiddleware, Store, ReducersMapObject, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from "../../auth/store/reducers";
import { State as CountryState } from '@mf-3/modules/country/store/reducers';

interface IStore extends Store {
	asyncReducers: ReducersMapObject,
	injectReducer: (key: string, asyncReducer: Reducer) => void
}

export default (): IStore => {
	const createReducer = (asyncReducers: ReducersMapObject = {}) => combineReducers({ auth, ...asyncReducers });
	const rootReducer = createReducer();
	const composeEnhancers = composeWithDevTools({ name: 'mf-3-reactjs' });
	return ({
		asyncReducers: {},
		injectReducer(key: string, asyncReducer: Reducer) {
			this.asyncReducers[key] = asyncReducer;
			this.replaceReducer(createReducer(this.asyncReducers))
		},
		...createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
	});
}

export interface RootState {
	country: CountryState
};