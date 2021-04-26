import { CustomError } from './custom.error';
import { MessageError } from './messages.error';
import { IJoiError } from '../errors/error-response.interface';

export class RequestValidationError extends CustomError {
  constructor(public errors: IJoiError[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return {
      message: MessageError.REQUEST_VALIDATION,
      errors: this.errors
    };
  };
}