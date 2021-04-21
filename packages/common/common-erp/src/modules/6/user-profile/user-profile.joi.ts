import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneUserProfileSchema = object({
  userProfileStatus: Joi.boolean().required(),
  userId: Joi.string().required(),
  profileId: Joi.string().required()
});

const updateOneUserProfileSchema = object({
  id: Joi.string().required(),
  userProfileStatus: Joi.boolean(),
  userId: Joi.string(),
  profileId: Joi.string().required()
});

const deleteOneUserProfileSchema = object({
  id: Joi.string().required()
});

const searchOneUserProfileSchema = object({
  id: Joi.string(),
  userProfileStatus: Joi.boolean(),
  userId: Joi.string(),
  profileId: Joi.string().required()
}).min(1);

const searchManyUserProfileSchema = array().items(searchOneUserProfileSchema);

export const userProfileJoiSchema: JoiSchema = ({
  createOne: createOneUserProfileSchema,
  updateOne: updateOneUserProfileSchema,
  deleteOne: deleteOneUserProfileSchema,
  searchOne: searchOneUserProfileSchema,
  searchMany: searchManyUserProfileSchema
});