import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateEstateInput,
  IUpdateEstateInput,
  IDeleteEstateInput,
  ISearchEstateInput,
  GRPC_ESTATE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { EstateDocument } from '@ms-3/modules/estate/client/mongodb/estate.schema';

@Injectable()
export class EstateMongodbService extends BaseMongodbService<
  EstateDocument,
  ICreateEstateInput,
  IUpdateEstateInput,
  IDeleteEstateInput,
  ISearchEstateInput
>() {
  constructor(
    @InjectModel(GRPC_ESTATE_SERVICE_NAME)
    private readonly estateModel: Model<EstateDocument>,
  ) {
    super(estateModel);
  }
}
