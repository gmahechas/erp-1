import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateAddressInput,
  IUpdateAddressInput,
  IDeleteAddressInput,
  ISearchAddressInput,
  GRPC_ADDRESS_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { AddressDocument } from '@ms1/modules/address/client/mongodb/address.schema';

@Injectable()
export class AddressMongodbService extends BaseMongodbService<
  AddressDocument,
  ICreateAddressInput,
  IUpdateAddressInput,
  IDeleteAddressInput,
  ISearchAddressInput
>() {
  constructor(
    @InjectModel(GRPC_ADDRESS_SERVICE_NAME)
    private readonly entityModel: Model<AddressDocument>,
  ) {
    super(entityModel);
  }
}
