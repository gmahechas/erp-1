import { PaginationActionType } from '../actions/index';

export interface State {
	readonly total: number;
	readonly perPage: number;
	readonly currentPage: number;
	readonly from: number;
	readonly to: number;
}

const initialState: State = {
	total: 0,
	perPage: 0,
	currentPage:0,
	from: 0,
	to: 0
};

export default function reducer(state = initialState, action: any): State {
	switch (action.type) {
		case PaginationActionType.PAGINATION:
		default:
			return state;
	}
}