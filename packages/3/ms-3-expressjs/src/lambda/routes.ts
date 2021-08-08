import * as fromCountryController from '../modules/country/controller';

const httpMethods = {
	Post: "POST",
	Get: "GET",
	Put: "PUT",
	Delete: "DELETE",
};

export default [
	{
		httpMethod: httpMethods.Post,
		path: '/rest/:version/country',
		action: fromCountryController.getCountries,
	}
];