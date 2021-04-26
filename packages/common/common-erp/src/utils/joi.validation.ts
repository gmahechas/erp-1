import { IJoiError } from './../errors/error-response.interface';
import { ObjectSchema, ArraySchema, ValidationError } from 'joi';

export const validate = (schema: ObjectSchema | ArraySchema, values: any) => schema.validate(values, { abortEarly: false });

export const serializeErrors = (errors: ValidationError): IJoiError[] => {
  return errors.details.map((error) => ({
    type: error.type,
    context: error.context,
  }));
}