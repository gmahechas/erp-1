import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneTypePersonSchema = object({
  typePersonDescription: Joi.string().min(2).max(64).required(),
  typePersonCode: Joi.string().min(2).max(8).required()
});

const updateOneTypePersonSchema = object({
  id: Joi.string().required(),
  typePersonDescription: Joi.string().min(2).max(64),
  typePersonCode: Joi.string().min(2).max(8)
});

const deleteOneTypePersonSchema = object({
  id: Joi.string().required()
});

const searchOneTypePersonSchema = object({
  id: Joi.string(),
  typePersonDescription: Joi.string().min(2).max(64),
  typePersonCode: Joi.string().min(2).max(8)
}).min(1);

const searchManyTypePersonSchema = array().items(searchOneTypePersonSchema);

export const typePersonJoiSchema: JoiSchema = ({
  createOne: createOneTypePersonSchema,
  updateOne: updateOneTypePersonSchema,
  deleteOne: deleteOneTypePersonSchema,
  searchOne: searchOneTypePersonSchema,
  searchMany: searchManyTypePersonSchema
});