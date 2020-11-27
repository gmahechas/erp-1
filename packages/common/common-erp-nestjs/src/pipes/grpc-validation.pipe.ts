import { Injectable, PipeTransform } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { ObjectSchema } from 'joi';

import { validate, serializeErrors } from './pipes.helper';

@Injectable()
export class GrpcValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) { }

  transform(values: any) {
    const msValidation = validate(this.schema, values.entity);
    if (msValidation.error) {
      const msErrors = serializeErrors(msValidation.error);
      throw new RpcException({ code: 3, message: JSON.stringify(msErrors) })
    } else {
      return values;
    }
  }
}
