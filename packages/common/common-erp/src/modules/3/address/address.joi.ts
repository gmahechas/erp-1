import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneAddressSchema = object({
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string().required()
});

const updateOneAddressSchema = object({
  id: Joi.string().required(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string()
});

const deleteOneAddressSchema = object({
  id: Joi.string().required()
});

const searchOneAddressSchema = object({
  id: Joi.string(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string()
}).min(1);

const searchManyAddressSchema = array().items(searchOneAddressSchema);

export const addressJoiSchema: JoiSchema = ({
  createOne: createOneAddressSchema,
  updateOne: updateOneAddressSchema,
  deleteOne: deleteOneAddressSchema,
  searchOne: searchOneAddressSchema,
  searchMany: searchManyAddressSchema
});