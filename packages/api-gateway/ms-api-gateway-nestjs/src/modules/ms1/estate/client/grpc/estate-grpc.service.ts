import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS1_PACKAGE_NAME,
  GRPC_ESTATE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { EstateType } from '@ms-api-gateway/modules/ms1/estate/server/graphql/estate.type';
import {
  CreateEstateInput,
  UpdateEstateInput,
  DeleteEstateInput,
  SearchEstateInput,
} from '@ms-api-gateway/modules/ms1/estate/server/graphql/estate.input';

@Injectable()
export class EstateGrpcService
  extends BaseGrpcService(GRPC_ESTATE_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    EstateType,
    CreateEstateInput,
    UpdateEstateInput,
    DeleteEstateInput,
    SearchEstateInput
  >;

  constructor(
    @Inject(GRPC_MS1_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        EstateType,
        CreateEstateInput,
        UpdateEstateInput,
        DeleteEstateInput,
        SearchEstateInput
      >
    >(GRPC_ESTATE_SERVICE_NAME);
  }
}
