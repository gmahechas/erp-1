import { IResponse } from './response.interface';

export const response = (statusCode: number, body: any, error: object | string = {}): IResponse => ({ statusCode, body, error });