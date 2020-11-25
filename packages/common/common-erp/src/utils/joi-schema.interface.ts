import { ObjectSchema } from 'joi';

export interface JoiSchema {
  create: ObjectSchema,
  update: ObjectSchema,
  delete: ObjectSchema
}