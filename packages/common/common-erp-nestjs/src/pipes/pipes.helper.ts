import { IErrorResponse } from '@gmahechas/common-erp';
import { ObjectSchema, ArraySchema, ValidationError, ValidationResult } from 'joi';

export function validate(schema: ObjectSchema | ArraySchema, values: any): ValidationResult {
  return schema.validate(values, {
    abortEarly: false,
  });
}

export function serializeErrors(errors: ValidationError): IErrorResponse {
  return ({
    message: 'error.validation',
    errors: errors.details.map((error) => ({
      type: error.type,
      context: error.context,
    }))
  })
}