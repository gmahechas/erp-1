import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IMenu } from '@gmahechas/common-erp';

export const menuSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    menuName: {
      type: String,
      required: true,
    },
    menuDescription: {
      type: String,
    },
    menuUri: {
      type: String,
    },
    menuOrder: {
      type: Number,
    },
    menuIdParent: {
      type: String,
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

export interface MenuDocument extends Document, IMenu {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}
