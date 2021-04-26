import { IErrorResponse } from '../errors/error-response.interface';

export abstract class CustomError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): IErrorResponse;
}