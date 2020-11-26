import { CustomError } from './custom.error';
import { IErrorResponse } from '../utils/error-response.interface';

export class RequestValidationError extends CustomError {
  constructor(public errors: IErrorResponse) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors;
  };
}