import { Injectable, PipeTransform, Scope } from '@nestjs/common';

import { ObjectSchema, ArraySchema } from 'joi';
import { RequestValidationError } from '@gmahechas/common-erp';

import { validate, serializeErrors } from './pipes.helper';

@Injectable()
export class GraphqlValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | ArraySchema) { }

  transform(values: any) {
    const apiValidation = validate(this.schema, values);
    if (apiValidation.error) {
      const apiErrors = serializeErrors(apiValidation.error);
      throw new RequestValidationError(apiErrors);
    } else {
      return values;
    }
  }
}
