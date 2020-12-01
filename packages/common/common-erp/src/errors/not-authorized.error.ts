import { CustomError } from './custom.error';

export class NotAuthorizedError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return { message: 'Not authorized' };
  };
}