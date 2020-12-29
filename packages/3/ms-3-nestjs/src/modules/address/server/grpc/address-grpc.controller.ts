import { Controller } from '@nestjs/common';

import {
  IAddress,
  ICreateAddressInput,
  IUpdateAddressInput,
  IDeleteAddressInput,
  ISearchAddressInput,
  GRPC_ADDRESS_SERVICE_NAME,
  addressJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { AddressMongodbService } from '@ms-3/modules/address/client/mongodb/address-mongodb.service';

@Controller()
export class AddressGrpcController extends BaseGrpcController<
  IAddress,
  ICreateAddressInput,
  IUpdateAddressInput,
  IDeleteAddressInput,
  ISearchAddressInput
>(GRPC_ADDRESS_SERVICE_NAME, addressJoiSchema) {
  constructor(private readonly addressMongodbService: AddressMongodbService) {
    super(addressMongodbService);
  }
}
