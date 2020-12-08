import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS3_PACKAGE_NAME,
  GRPC_TYPE_IDENTIFICATION_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { TypeIdentificationType } from '@api-gateway-nestjs/modules/ms3/type-identification/server/graphql/type-identification.type';
import {
  CreateTypeIdentificationInput,
  UpdateTypeIdentificationInput,
  DeleteTypeIdentificationInput,
  SearchTypeIdentificationInput,
} from '@api-gateway-nestjs/modules/ms3/type-identification/server/graphql/type-identification.input';

@Injectable()
export class TypeIdentificationGrpcService
  extends BaseGrpcService(GRPC_TYPE_IDENTIFICATION_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    TypeIdentificationType,
    CreateTypeIdentificationInput,
    UpdateTypeIdentificationInput,
    DeleteTypeIdentificationInput,
    SearchTypeIdentificationInput
  >;

  constructor(
    @Inject(GRPC_MS3_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        TypeIdentificationType,
        CreateTypeIdentificationInput,
        UpdateTypeIdentificationInput,
        DeleteTypeIdentificationInput,
        SearchTypeIdentificationInput
      >
    >(GRPC_TYPE_IDENTIFICATION_SERVICE_NAME);
  }
}
