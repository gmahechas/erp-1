import { Injectable, PipeTransform } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { ObjectSchema, ArraySchema } from 'joi';

import { validate, serializeErrors } from './pipes.helper';

@Injectable()
export class GrpcValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | ArraySchema) { }

  transform(values: any) {
    // This's because the request doesn't brings { entity: ... } or { entities: ... }
    const newValues = (values.entity) ? values.entity : (values.entities) ? values.entities : values;
    const msValidation = validate(this.schema, newValues);
    if (msValidation.error) {
      const msErrors = serializeErrors(msValidation.error);
      throw new RpcException({ code: 3, message: JSON.stringify(msErrors) })
    } else {
      return values;
    }
  }
}
