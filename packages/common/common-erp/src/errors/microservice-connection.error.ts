import { CustomError } from './custom.error';

export class MicroserviceConnectionError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, MicroserviceConnectionError.prototype);
  }

  serializeErrors() {
    return { message: 'error.microservice' };
  };
}