import Joi, { object, array } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOneCitySchema = object({
  cityName: Joi.string().min(3).max(30).required(),
  cityCode: Joi.string().min(2).max(4).required(),
  estateId: Joi.string().required()
});

const updateOneCitySchema = object({
  id: Joi.string().required(),
  cityName: Joi.string().min(3).max(30),
  cityCode: Joi.string().min(2).max(4),
  estateId: Joi.string()
});

const deleteOneCitySchema = object({
  id: Joi.string().required()
});

const searchOneCitySchema = object({
  id: Joi.string(),
  cityName: Joi.string().min(3).max(30),
  cityCode: Joi.string().min(2).max(4),
  estateId: Joi.string()
}).min(1);

const searchManyCitySchema = array().items(searchOneCitySchema);

export const cityJoiSchema: JoiSchema = ({
  createOne: createOneCitySchema,
  updateOne: updateOneCitySchema,
  deleteOne: deleteOneCitySchema,
  searchOne: searchOneCitySchema,
  searchMany: searchManyCitySchema
});