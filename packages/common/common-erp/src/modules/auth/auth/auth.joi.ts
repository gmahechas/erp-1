import Joi, { object } from 'joi';

const authSigninRequest = object({
  userName: Joi.string().min(3).max(30).required(),
  userPassword: Joi.string().min(3).max(30).required()
});

export const authJoiSchema = ({
  signin: authSigninRequest,
});