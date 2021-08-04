import { EntityTypes, EntityActionTypes } from '../actions/index';

export interface State {
	readonly data: any[];
}

const initialState: State = {
	data: []
}

export default function reducer(state = initialState, action: EntityActionTypes): State {
	switch (action.type) {
		case EntityTypes.SEARCH_MANY_SUCCESS:
			return {...state, data: action.payload.entities }
		default:
			return state;
	}
}