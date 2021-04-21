import { ObjectSchema, ArraySchema } from 'joi';

export interface JoiSchema {
  createOne: ObjectSchema,
  updateOne: ObjectSchema,
  deleteOne: ObjectSchema,
  searchOne: ObjectSchema,
  searchMany: ArraySchema,
}