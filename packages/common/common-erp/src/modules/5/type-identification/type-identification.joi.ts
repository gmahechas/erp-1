import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneTypeIdentificationSchema = object({
  typeIdentificationDescription: Joi.string().min(2).max(64).required(),
  typeIdentificationCode: Joi.string().min(2).max(8).required()
});

const updateOneTypeIdentificationSchema = object({
  id: Joi.string().required(),
  typeIdentificationDescription: Joi.string().min(2).max(64),
  typeIdentificationCode: Joi.string().min(2).max(8)
});

const deleteOneTypeIdentificationSchema = object({
  id: Joi.string().required()
});

const searchOneTypeIdentificationSchema = object({
  id: Joi.string(),
  typeIdentificationDescription: Joi.string().min(2).max(64),
  typeIdentificationCode: Joi.string().min(2).max(8)
}).min(1);

const searchManyTypeIdentificationSchema = array().items(searchOneTypeIdentificationSchema);

export const typeIdentificationJoiSchema: JoiSchema = ({
  createOne: createOneTypeIdentificationSchema,
  updateOne: updateOneTypeIdentificationSchema,
  deleteOne: deleteOneTypeIdentificationSchema,
  searchOne: searchOneTypeIdentificationSchema,
  searchMany: searchManyTypeIdentificationSchema
});