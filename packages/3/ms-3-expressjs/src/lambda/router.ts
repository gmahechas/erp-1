import { APIGatewayProxyEvent } from 'aws-lambda';
const { match } = require("path-to-regexp");
import routes from './routes';

export default (event: APIGatewayProxyEvent) => {
	const route = routes.find(route => {
		return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
	});

	if (!route) {
		throw new Error('404 - pattern not found');
	}
	return route;
}