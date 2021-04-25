import { Injectable, PipeTransform } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { ObjectSchema, ArraySchema } from 'joi';

import { validate, serializeErrors } from './pipes.helper';

@Injectable()
export class GrpcValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | ArraySchema) { }

  transform(values: any) {
    const newValues = (values.entity) ? values.entity : (values.entities) ? values.entities : (Object.keys(values).length === 0) ? [] : values;
    const validation = validate(this.schema, newValues);
    if (validation.error) {
      const errors = serializeErrors(validation.error);
      throw new RpcException({ code: 3, message: JSON.stringify(errors) })
    } else {
      return values;
    }
  }
}
