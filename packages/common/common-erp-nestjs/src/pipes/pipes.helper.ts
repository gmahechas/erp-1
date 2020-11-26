import { IErrorResponse } from '@gmahechas/common-erp';
import { ObjectSchema, ValidationError, ValidationResult } from 'joi';

export function validate(schema: ObjectSchema, values: any): ValidationResult {
  return schema.validate(values, {
    abortEarly: false,
  });
}

export function serializeErrors(errors: ValidationError): IErrorResponse {
  return ({
    message: 'validation.error',
    errors: errors.details.map((error) => ({
      type: error.type,
      context: error.context,
    }))
  })
}