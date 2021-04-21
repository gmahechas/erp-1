import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneOfficeSchema = object({
  officeName: Joi.string().min(3).max(30).required(),
  companyId: Joi.string().required()
});

const updateOneOfficeSchema = object({
  id: Joi.string().required(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string()
});

const deleteOneOfficeSchema = object({
  id: Joi.string().required()
});

const searchOneOfficeSchema = object({
  id: Joi.string(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string()
}).min(1);

const searchManyOfficeSchema = array().items(searchOneOfficeSchema);

export const officeJoiSchema: JoiSchema = ({
  createOne: createOneOfficeSchema,
  updateOne: updateOneOfficeSchema,
  deleteOne: deleteOneOfficeSchema,
  searchOne: searchOneOfficeSchema,
  searchMany: searchManyOfficeSchema
});