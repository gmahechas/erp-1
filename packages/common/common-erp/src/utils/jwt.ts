import { sign } from 'jsonwebtoken';

export const getJwt = (payload: object, secret: string) => {
  return sign(payload, secret);
};