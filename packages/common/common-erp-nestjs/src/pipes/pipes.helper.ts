import { ObjectSchema, ValidationError, ValidationResult } from 'joi';

export function validate(schema: ObjectSchema, values: any): ValidationResult {
  return schema.validate(values, {
    abortEarly: false,
  });
}

export function serializeErrors(errors: ValidationError) {
  return errors.details.map((error) => ({
    message: error.message,
    field: error.context?.key,
  }));
}