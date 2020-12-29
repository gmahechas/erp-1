import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createTypePersonSchema = object({
  typePersonDescription: Joi.string().min(2).max(64).required(),
  typePersonCode: Joi.string().min(2).max(8).required()
});

const updateTypePersonSchema = object({
  id: Joi.string().required(),
  typePersonDescription: Joi.string().min(2).max(64),
  typePersonCode: Joi.string().min(2).max(8)
});

const deleteTypePersonSchema = object({
  id: Joi.string().required()
});

export const typePersonJoiSchema: JoiSchema = ({
  create: createTypePersonSchema,
  update: updateTypePersonSchema,
  delete: deleteTypePersonSchema
});