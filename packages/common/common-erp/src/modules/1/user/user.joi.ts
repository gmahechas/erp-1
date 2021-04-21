import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneUserSchema = object({
  userName: Joi.string().min(3).max(30).required(),
  userPassword: Joi.string().min(3).max(30).required(),
  personId: Joi.string().required()
});

const updateOneUserSchema = object({
  id: Joi.string().required(),
  userName: Joi.string().min(3).max(30),
  userPassword: Joi.string().min(3).max(30),
  personId: Joi.string()
});

const deleteOneUserSchema = object({
  id: Joi.string().required()
});

const searchOneUserSchema = object({
  id: Joi.string(),
  userName: Joi.string().min(3).max(30),
  userPassword: Joi.string().min(3).max(30),
  personId: Joi.string()
}).min(1);

const searchManyUserSchema = array().items(searchOneUserSchema);

export const userJoiSchema: JoiSchema = ({
  createOne: createOneUserSchema,
  updateOne: updateOneUserSchema,
  deleteOne: deleteOneUserSchema,
  searchOne: searchOneUserSchema,
  searchMany: searchManyUserSchema
});