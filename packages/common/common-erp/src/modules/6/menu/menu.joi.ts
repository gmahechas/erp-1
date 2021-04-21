import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneMenuSchema = object({
  menuName: Joi.string().min(3).max(30).required(),
  menuDescription: Joi.string().min(3).max(30).required(),
  menuUri: Joi.string().min(3).max(30).required(),
  menuOrder: Joi.number().integer().positive().required(),
  menuIdParent: Joi.string().min(3).max(30).required()
});

const updateOneMenuSchema = object({
  id: Joi.string().required(),
  menuName: Joi.string().min(3).max(30),
  menuDescription: Joi.string().min(3).max(30),
  menuUri: Joi.string().min(3).max(30),
  menuOrder: Joi.number().integer().positive(),
  menuIdParent: Joi.string().min(3).max(30)
});

const deleteOneMenuSchema = object({
  id: Joi.string().required()
});

const searchOneMenuSchema = object({
  id: Joi.string(),
  menuName: Joi.string().min(3).max(30),
  menuDescription: Joi.string().min(3).max(30),
  menuUri: Joi.string().min(3).max(30),
  menuOrder: Joi.number().integer().positive(),
  menuIdParent: Joi.string().min(3).max(30)
}).min(1);

const searchManyMenuSchema = array().items(searchOneMenuSchema);

export const menuJoiSchema: JoiSchema = ({
  createOne: createOneMenuSchema,
  updateOne: updateOneMenuSchema,
  deleteOne: deleteOneMenuSchema,
  searchOne: searchOneMenuSchema,
  searchMany: searchManyMenuSchema
});