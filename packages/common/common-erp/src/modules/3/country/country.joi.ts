import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneCountrySchema = object({
  countryName: Joi.string().min(3).max(30).required(),
  countryCode: Joi.string().min(2).max(4).required()
});

const updateOneCountrySchema = object({
  id: Joi.string().required(),
  countryName: Joi.string().min(3).max(30),
  countryCode: Joi.string().min(2).max(4)
});

const deleteOneCountrySchema = object({
  id: Joi.string().required()
});

const searchOneCountrySchema = object({
  id: Joi.string(),
  countryName: Joi.string().min(3).max(30),
  countryCode: Joi.string().min(2).max(4)
}).min(1);

const searchManyCountrySchema = array().items(searchOneCountrySchema);

export const countryJoiSchema: JoiSchema = ({
  createOne: createOneCountrySchema,
  updateOne: updateOneCountrySchema,
  deleteOne: deleteOneCountrySchema,
  searchOne: searchOneCountrySchema,
  searchMany: searchManyCountrySchema
});
