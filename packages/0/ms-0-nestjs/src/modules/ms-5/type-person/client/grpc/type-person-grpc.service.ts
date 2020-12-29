import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_5_PACKAGE_NAME,
  GRPC_TYPE_PERSON_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { TypePersonType } from '@ms-0/modules/ms-5/type-person/server/graphql/type-person.type';
import {
  CreateTypePersonInput,
  UpdateTypePersonInput,
  DeleteTypePersonInput,
  SearchTypePersonInput,
} from '@ms-0/modules/ms-5/type-person/server/graphql/type-person.input';

@Injectable()
export class TypePersonGrpcService
  extends BaseGrpcService(GRPC_TYPE_PERSON_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    TypePersonType,
    CreateTypePersonInput,
    UpdateTypePersonInput,
    DeleteTypePersonInput,
    SearchTypePersonInput
  >;

  constructor(
    @Inject(GRPC_MS_5_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        TypePersonType,
        CreateTypePersonInput,
        UpdateTypePersonInput,
        DeleteTypePersonInput,
        SearchTypePersonInput
      >
    >(GRPC_TYPE_PERSON_SERVICE_NAME);
  }
}
