import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { addressJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { AddressGrpcService } from '@ms-0/modules/ms-2/address/client/grpc/address-grpc.service';
import { AddressType } from '@ms-0/modules/ms-2/address/server/graphql/address.type';
import {
  CreateAddressInput,
  UpdateAddressInput,
  DeleteAddressInput,
  SearchAddressInput,
} from '@ms-0/modules/ms-2/address/server/graphql/address.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class AddressResolver extends BaseResolver(
  AddressType,
  CreateAddressInput,
  UpdateAddressInput,
  DeleteAddressInput,
  SearchAddressInput,
  'Address',
  addressJoiSchema,
) {
  constructor(private readonly addressGrpcService: AddressGrpcService) {
    super(addressGrpcService);
  }
}
