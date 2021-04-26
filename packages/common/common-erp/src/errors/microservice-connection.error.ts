import { CustomError } from './custom.error';
import { MessageError } from './messages.error';

export class MicroserviceConnectionError extends CustomError {
  constructor() {
    super();
    Object.setPrototypeOf(this, MicroserviceConnectionError.prototype);
  }

  serializeErrors() {
    return { message: MessageError.MICROSERVICE_CONNECTION };
  };
}