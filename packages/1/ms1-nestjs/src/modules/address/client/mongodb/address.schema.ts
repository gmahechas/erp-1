import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IAddress } from '@gmahechas/common-erp';

export const addressSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    addressZipCode: {
      type: String,
    },
    cityId: {
      type: String,
      require: true,
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

export interface AddressDocument extends Document, IAddress {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}
