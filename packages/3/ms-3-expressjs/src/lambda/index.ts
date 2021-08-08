import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import router from './router';
import { IResponse } from '../utils/response.interface';
import { response } from '../utils/helper';

exports.handler = async (event: APIGatewayProxyEvent) => {

	try {
		const route = router(event);

		return route!.action({
			headers: event.headers,
			body: event.body,
			params: event.pathParameters,
			query: event.queryStringParameters
		});
	} catch (error) {
		return response(400, null, 'error')
	}

}