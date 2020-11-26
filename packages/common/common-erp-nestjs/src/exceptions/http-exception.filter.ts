import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

import {
  CustomError,
  DatabaseConnectionError,
  MicroserviceConnectionError,
  RequestValidationError
} from '@gmahechas/common-erp';

@Catch(DatabaseConnectionError, RequestValidationError, MicroserviceConnectionError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: CustomError, host: ArgumentsHost) {
    return exception;
  }
}