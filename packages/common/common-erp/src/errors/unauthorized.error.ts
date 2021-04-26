import { CustomError } from './custom.error';
import { MessageError } from './messages.error';

export class UnAuthorizedError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeErrors() {
    return { message: MessageError.UNAUTHORIZED };
  };
}