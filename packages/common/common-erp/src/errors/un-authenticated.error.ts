import { CustomError } from './custom.error';

export class UnAuthenticatedError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, UnAuthenticatedError.prototype);
  }

  serializeErrors() {
    return { message: 'error.unauthenticated' };
  };
}