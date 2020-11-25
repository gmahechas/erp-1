import { Schema, Document } from 'mongoose';

import { v4 as uuidv4 } from 'uuid';

import { IUser } from '@gmahechas/common-erp';

export const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    userName: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    personId: {
      type: String,
      required: true,
    },
  },
  {
    toObject: {
      transform(doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export interface UserDocument extends Document, IUser {
  id: string;
  userName: string;
  userPassword: string;
  personId: string;
}
