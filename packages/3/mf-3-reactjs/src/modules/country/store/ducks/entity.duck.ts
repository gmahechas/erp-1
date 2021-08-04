import { Dispatch } from 'redux';
import axios from '@mf-3/utils/axios';
import { EntityActionTypes, entityCreateActionTypes } from '@mf-3/modules/country/store/actions';

export const searchMany = (search: any) => async (dispatch: Dispatch, getState: () => void) => {
	dispatch(entityCreateActionTypes.searchMany({search}));
	try {
		const response = await axios.get('/todos');
		dispatch(entityCreateActionTypes.searchManySuccess(response.data));
	} catch (error) {
		dispatch(entityCreateActionTypes.searchManyError(error));
	}
}
