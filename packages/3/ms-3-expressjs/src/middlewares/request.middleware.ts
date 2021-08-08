import { Request, Response, NextFunction } from 'express';
import { IRequest } from '../utils/request.interface';

declare global {
	namespace Express {
		interface Request {
			irequest: IRequest
		}
	}
}

export default (request: Request, response: Response, next: NextFunction) => {
	request.irequest = ({
		headers: request.headers,
		body: request.body,
		params: request.params,
		query: request.query
	});
	next();
};