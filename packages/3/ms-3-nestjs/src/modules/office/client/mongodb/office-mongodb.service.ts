import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateOfficeInput,
  IUpdateOfficeInput,
  IDeleteOfficeInput,
  ISearchOfficeInput,
  GRPC_OFFICE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { OfficeDocument } from '@ms-3/modules/office/client/mongodb/office.schema';

@Injectable()
export class OfficeMongodbService extends BaseMongodbService<
  OfficeDocument,
  ICreateOfficeInput,
  IUpdateOfficeInput,
  IDeleteOfficeInput,
  ISearchOfficeInput
>() {
  constructor(
    @InjectModel(GRPC_OFFICE_SERVICE_NAME)
    private readonly officeModel: Model<OfficeDocument>,
  ) {
    super(officeModel);
  }
}
