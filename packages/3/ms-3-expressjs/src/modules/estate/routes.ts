import express, { Request, Response } from 'express';
import * as fromEstateController from './controller';

const router = express.Router();

router.post('/', (request: Request, response: Response) => {
	const { statusCode, body } = fromEstateController.getEstates(request.irequest);
	response.status(statusCode).send(body);
});


export default router;