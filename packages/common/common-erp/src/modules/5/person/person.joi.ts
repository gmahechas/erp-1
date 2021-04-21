import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOnePersonSchema = object({
  personIdentification: Joi.string().min(2).max(64).required(),
  personFirstName: Joi.string().min(2).max(64).allow(null, ''),
  personSecondName: Joi.string().min(2).max(64).allow(null, ''),
  personFirstSurname: Joi.string().min(2).max(64).allow(null, ''),
  personSecondSurname: Joi.string().min(2).max(64).allow(null, ''),
  personCompanyName: Joi.string().min(2).max(128).allow(null, ''),
  companyId: Joi.string().required(),
  typePersonId: Joi.string().required(),
  typeIdentificationId: Joi.string().required()
});

const updateOnePersonSchema = object({
  id: Joi.string().required(),
  personIdentification: Joi.string().min(2).max(64),
  personFirstName: Joi.string().min(2).max(64).allow(null, ''),
  personSecondName: Joi.string().min(2).max(64).allow(null, ''),
  personFirstSurname: Joi.string().min(2).max(64).allow(null, ''),
  personSecondSurname: Joi.string().min(2).max(64).allow(null, ''),
  personCompanyName: Joi.string().min(2).max(128).allow(null, ''),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
});

const deleteOnePersonSchema = object({
  id: Joi.string().required()
});

const searchOnePersonSchema = object({
  id: Joi.string(),
  personIdentification: Joi.string().min(2).max(64),
  personFirstName: Joi.string().min(2).max(64).allow(null, ''),
  personSecondName: Joi.string().min(2).max(64).allow(null, ''),
  personFirstSurname: Joi.string().min(2).max(64).allow(null, ''),
  personSecondSurname: Joi.string().min(2).max(64).allow(null, ''),
  personCompanyName: Joi.string().min(2).max(128).allow(null, ''),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
}).min(1);

const searchManyPersonSchema = array().items(searchOnePersonSchema);

export const personJoiSchema: JoiSchema = ({
  createOne: createOnePersonSchema,
  updateOne: updateOnePersonSchema,
  deleteOne: deleteOnePersonSchema,
  searchOne: searchOnePersonSchema,
  searchMany: searchManyPersonSchema
});