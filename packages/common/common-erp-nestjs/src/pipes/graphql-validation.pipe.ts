import { Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema, ArraySchema } from 'joi';
import { validate, serializeErrors, RequestValidationError } from '@gmahechas/common-erp';

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
