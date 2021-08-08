import express, { Request, Response } from 'express';
import * as fromCountryController from './controller';

const router = express.Router();

router.post('/', (request: Request, response: Response) => {
	const { statusCode, body } = fromCountryController.getCountries(request.irequest);
	response.status(statusCode).send(body);
});


export default router;