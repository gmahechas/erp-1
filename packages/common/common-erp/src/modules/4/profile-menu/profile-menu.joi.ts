import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createProfileMenuSchema = object({
  profileMenuStatus: Joi.boolean().required(),
  menuId: Joi.string().required(),
  profileId: Joi.string().required()
});

const updateProfileMenuSchema = object({
  id: Joi.string().required(),
  profileMenuStatus: Joi.boolean(),
  menuId: Joi.string(),
  profileId: Joi.string()
});

const deleteProfileMenuSchema = object({
  id: Joi.string().required()
});

export const profileMenuJoiSchema: JoiSchema = ({
  create: createProfileMenuSchema,
  update: updateProfileMenuSchema,
  delete: deleteProfileMenuSchema
});