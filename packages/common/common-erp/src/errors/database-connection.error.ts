import { CustomError } from './custom.error';

export class DatabaseConnectionError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return { message: 'error.database' };
  };
}