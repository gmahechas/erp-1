import { combineReducers } from 'redux';
import { connect, ConnectedProps } from 'react-redux'
import * as fromDucks from '@mf-3/modules/country/store/ducks';

import { RootState } from '@mf-3/core/store';
import entity, { State as entityState } from './entity.reducer';
import pagination, { State as paginationState } from './pagination.reducer'

export interface State {
	entity: entityState;
	pagination: paginationState;
}

export const reducers = combineReducers<State>({ entity, pagination });
export const connector = connect((state: RootState) => ({ country: state.country }), fromDucks);
export type PropsFromRedux = ConnectedProps<typeof connector>;