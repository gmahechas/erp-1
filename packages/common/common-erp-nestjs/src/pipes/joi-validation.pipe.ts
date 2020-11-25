import { Injectable, PipeTransform } from '@nestjs/common';

import { ObjectSchema, ValidationResult } from 'joi';
import { RequestValidationError } from '@gmahechas/common-erp';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(values: any) {
    console.log('Values:::', values);
    const { error }: ValidationResult = this.schema.validate(values, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((error) => ({
        message: error.message,
        field: error.context?.key,
      }));
      throw new RequestValidationError(errors);
    }
    return values;
  }
}
