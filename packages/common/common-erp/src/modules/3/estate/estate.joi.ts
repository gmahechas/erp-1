import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneEstateSchema = object({
  estateName: Joi.string().min(3).max(30).required(),
  estateCode: Joi.string().min(2).max(4).required(),
  countryId: Joi.string().required()
});

const updateOneEstateSchema = object({
  id: Joi.string().required(),
  estateName: Joi.string().min(3).max(30),
  estateCode: Joi.string().min(2).max(4),
  countryId: Joi.string()
});

const deleteOneEstateSchema = object({
  id: Joi.string().required()
});

const searchOneEstateSchema = object({
  id: Joi.string(),
  estateName: Joi.string().min(3).max(30),
  estateCode: Joi.string().min(2).max(4),
  countryId: Joi.string()
}).min(1);

const searchManyEstateSchema = array().items(searchOneEstateSchema);

export const estateJoiSchema: JoiSchema = ({
  createOne: createOneEstateSchema,
  updateOne: updateOneEstateSchema,
  deleteOne: deleteOneEstateSchema,
  searchOne: searchOneEstateSchema,
  searchMany: searchManyEstateSchema
});
