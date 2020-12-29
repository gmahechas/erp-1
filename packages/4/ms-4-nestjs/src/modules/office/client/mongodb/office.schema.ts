import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IOffice } from '@gmahechas/common-erp';

export const officeSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    officeName: {
      type: String,
      required: true,
    },
    companyId: {
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

export interface OfficeDocument extends Document, IOffice {
  id: string;
  officeName: string;
  companyId: string;
}
