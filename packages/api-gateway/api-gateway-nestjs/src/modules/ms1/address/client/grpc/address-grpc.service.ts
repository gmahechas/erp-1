import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS1_PACKAGE_NAME,
  GRPC_ADDRESS_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { AddressType } from '@api-gateway-nestjs/modules/ms1/address/server/graphql/address.type';
import {
  CreateAddressInput,
  UpdateAddressInput,
  DeleteAddressInput,
  SearchAddressInput,
} from '@api-gateway-nestjs/modules/ms1/address/server/graphql/address.input';

@Injectable()
export class AddressGrpcService
  extends BaseGrpcService(GRPC_ADDRESS_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    AddressType,
    CreateAddressInput,
    UpdateAddressInput,
    DeleteAddressInput,
    SearchAddressInput
  >;

  constructor(
    @Inject(GRPC_MS1_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        AddressType,
        CreateAddressInput,
        UpdateAddressInput,
        DeleteAddressInput,
        SearchAddressInput
      >
    >(GRPC_ADDRESS_SERVICE_NAME);
  }
}
