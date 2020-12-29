import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateTypeIdentificationInput,
  IUpdateTypeIdentificationInput,
  IDeleteTypeIdentificationInput,
  ISearchTypeIdentificationInput,
  GRPC_TYPE_IDENTIFICATION_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { TypeIdentificationDocument } from '@ms-5/modules/type-identification/client/mongodb/type-identification.schema';

@Injectable()
export class TypeIdentificationMongodbService extends BaseMongodbService<
  TypeIdentificationDocument,
  ICreateTypeIdentificationInput,
  IUpdateTypeIdentificationInput,
  IDeleteTypeIdentificationInput,
  ISearchTypeIdentificationInput
>() {
  constructor(
    @InjectModel(GRPC_TYPE_IDENTIFICATION_SERVICE_NAME)
    private readonly typeIdentificationModel: Model<TypeIdentificationDocument>,
  ) {
    super(typeIdentificationModel);
  }
}
