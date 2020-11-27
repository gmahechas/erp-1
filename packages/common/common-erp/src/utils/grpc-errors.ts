import { CustomError } from './../errors/custom.error'
import { MicroserviceConnectionError } from './../errors/microservice-connection.error'
import { RequestValidationError } from './../errors/request-validation.error'

export const grpcErrorsHandler = (grpcError: any): CustomError => {
  switch (grpcError.code) {
    case 3:
      return new RequestValidationError(JSON.parse(grpcError.details))
    case 14:
      return new MicroserviceConnectionError()
    case 16:
      return new RequestValidationError(JSON.parse(grpcError.details))
    default:
      return new MicroserviceConnectionError()
  }
} 