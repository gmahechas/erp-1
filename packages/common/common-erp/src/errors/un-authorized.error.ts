import { CustomError } from './custom.error';

export class UnAuthorizedError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeErrors() {
    return { message: 'error.unauthorized' };
  };
}