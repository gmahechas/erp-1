import { response } from '../../utils/helper';
import { IRequest } from '../../utils/request.interface';
import { IResponse } from '../../utils/response.interface';

export const getCountries = (request: IRequest): IResponse => {
	return response(200, request.body);
};