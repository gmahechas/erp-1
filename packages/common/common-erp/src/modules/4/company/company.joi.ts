import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneCompanySchema = object({
  companyName: Joi.string().min(3).max(30).required(),
  companyIdentification: Joi.string().min(2).max(30).required(),
  companyKey: Joi.string().min(3).max(8).required(),
  cityId: Joi.string().required()
});

const updateOneCompanySchema = object({
  id: Joi.string().required(),
  companyName: Joi.string().min(3).max(30),
  companyIdentification: Joi.string().min(2).max(30),
  companyKey: Joi.string().min(3).max(8),
  cityId: Joi.string()
});

const deleteOneCompanySchema = object({
  id: Joi.string().required()
});

const searchOneCompanySchema = object({
  id: Joi.string(),
  companyName: Joi.string().min(3).max(30),
  companyIdentification: Joi.string().min(2).max(30),
  companyKey: Joi.string().min(3).max(8),
  cityId: Joi.string()
}).min(1);

const searchManyCompanySchema = array().items(searchOneCompanySchema);

export const companyJoiSchema: JoiSchema = ({
  createOne: createOneCompanySchema,
  updateOne: updateOneCompanySchema,
  deleteOne: deleteOneCompanySchema,
  searchOne: searchOneCompanySchema,
  searchMany: searchManyCompanySchema
});