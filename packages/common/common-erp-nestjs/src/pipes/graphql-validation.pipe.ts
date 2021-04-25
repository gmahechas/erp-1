import { Injectable, PipeTransform, Scope } from '@nestjs/common';

import { ObjectSchema, ArraySchema } from 'joi';
import { RequestValidationError } from '@gmahechas/common-erp';

import { validate, serializeErrors } from './pipes.helper';

@Injectable()
export class GraphqlValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | ArraySchema) { }

  transform(values: any) {
    const validation = validate(this.schema, values);
    if (validation.error) {
      const errors = serializeErrors(validation.error);
      throw new RequestValidationError(errors);
    } else {
      return values;
    }
  }
}
