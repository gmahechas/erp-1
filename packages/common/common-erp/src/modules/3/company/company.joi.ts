import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createCompanySchema = object({
  companyName: Joi.string().min(3).max(30).required(),
  companyIdentification: Joi.string().min(2).max(30).required(),
  companyKey: Joi.string().min(3).max(8).required(),
  cityId: Joi.string().required()
});

const updateCompanySchema = object({
  id: Joi.string().required(),
  companyName: Joi.string().min(3).max(30),
  companyIdentification: Joi.string().min(2).max(30),
  companyKey: Joi.string().min(3).max(8),
  cityId: Joi.string()
});

const deleteCompanySchema = object({
  id: Joi.string().required()
});

export const companyJoiSchema: JoiSchema = ({
  create: createCompanySchema,
  update: updateCompanySchema,
  delete: deleteCompanySchema
});