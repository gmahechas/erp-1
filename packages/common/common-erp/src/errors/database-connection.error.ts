import { CustomError } from './custom.error';
import { MessageError } from './messages.error';

export class DatabaseConnectionError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return { message: MessageError.DATABASE_CONNECTION };
  };
}