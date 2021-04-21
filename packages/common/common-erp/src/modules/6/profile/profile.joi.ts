import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneProfileSchema = object({
  profileName: Joi.string().min(3).max(30).required(),
  profileDescription: Joi.string().min(3).max(30).required()
});

const updateOneProfileSchema = object({
  id: Joi.string().required(),
  profileName: Joi.string().min(3).max(30),
  profileDescription: Joi.string().min(3).max(30)
});

const deleteOneProfileSchema = object({
  id: Joi.string().required()
});

const searchOneProfileSchema = object({
  id: Joi.string(),
  profileName: Joi.string().min(3).max(30),
  profileDescription: Joi.string().min(3).max(30)
}).min(1);

const searchManyProfileSchema = array().items(searchOneProfileSchema);

export const profileJoiSchema: JoiSchema = ({
  createOne: createOneProfileSchema,
  updateOne: updateOneProfileSchema,
  deleteOne: deleteOneProfileSchema,
  searchOne: searchOneProfileSchema,
  searchMany: searchManyProfileSchema
});