import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

import {
  CustomError,
  DatabaseConnectionError,
  MicroserviceConnectionError,
  UnAuthorizedError,
  RequestValidationError,
  UnAuthenticatedError
} from '@gmahechas/common-erp';

@Catch(DatabaseConnectionError, RequestValidationError, MicroserviceConnectionError, UnAuthorizedError, UnAuthenticatedError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: CustomError, host: ArgumentsHost) {
    return exception;
  }
}