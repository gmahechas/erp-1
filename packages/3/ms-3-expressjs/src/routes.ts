import express from 'express';
import countryRouter from './modules/country/routes';
import estateRouter from './modules/estate/routes';

const router = express.Router();

export default [
	router.use('/country', countryRouter),
	router.use('/estate', estateRouter)
]