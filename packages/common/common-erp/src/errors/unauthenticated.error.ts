import { CustomError } from './custom.error';
import { MessageError } from './messages.error';

export class UnAuthenticatedError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, UnAuthenticatedError.prototype);
  }

  serializeErrors() {
    return { message: MessageError.UNAUTHENTICATED };
  };
}