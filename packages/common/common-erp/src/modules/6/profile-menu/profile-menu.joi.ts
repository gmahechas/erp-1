import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneProfileMenuSchema = object({
  profileMenuStatus: Joi.boolean().required(),
  menuId: Joi.string().required(),
  profileId: Joi.string().required()
});

const updateOneProfileMenuSchema = object({
  id: Joi.string().required(),
  profileMenuStatus: Joi.boolean(),
  menuId: Joi.string(),
  profileId: Joi.string()
});

const deleteOneProfileMenuSchema = object({
  id: Joi.string().required()
});

const searchOneProfileMenuSchema = object({
  id: Joi.string(),
  profileMenuStatus: Joi.boolean(),
  menuId: Joi.string(),
  profileId: Joi.string()
}).min(1);

const searchManyProfileMenuSchema = array().items(searchOneProfileMenuSchema);

export const profileMenuJoiSchema: JoiSchema = ({
  createOne: createOneProfileMenuSchema,
  updateOne: updateOneProfileMenuSchema,
  deleteOne: deleteOneProfileMenuSchema,
  searchOne: searchOneProfileMenuSchema,
  searchMany: searchManyProfileMenuSchema
});