import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createMenuSchema = object({
  menuName: Joi.string().min(3).max(30).required(),
  menuDescription: Joi.string().min(3).max(30).required(),
  menuUri: Joi.string().min(3).max(30).required(),
  menuOrder: Joi.number().integer().positive().required(),
  menuIdParent: Joi.string().min(3).max(30).required()
});

const updateMenuSchema = object({
  id: Joi.string().required(),
  menuName: Joi.string().min(3).max(30),
  menuDescription: Joi.string().min(3).max(30),
  menuUri: Joi.string().min(3).max(30),
  menuOrder: Joi.number().integer().positive(),
  menuIdParent: Joi.string().min(3).max(30)
});

const deleteMenuSchema = object({
  id: Joi.string().required()
});

export const menuJoiSchema: JoiSchema = ({
  create: createMenuSchema,
  update: updateMenuSchema,
  delete: deleteMenuSchema
});