import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS2_PACKAGE_NAME,
  GRPC_OFFICE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { OfficeType } from '@ms-0/modules/ms2/office/server/graphql/office.type';
import {
  CreateOfficeInput,
  UpdateOfficeInput,
  DeleteOfficeInput,
  SearchOfficeInput,
} from '@ms-0/modules/ms2/office/server/graphql/office.input';

@Injectable()
export class OfficeGrpcService
  extends BaseGrpcService(GRPC_OFFICE_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    OfficeType,
    CreateOfficeInput,
    UpdateOfficeInput,
    DeleteOfficeInput,
    SearchOfficeInput
  >;

  constructor(
    @Inject(GRPC_MS2_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        OfficeType,
        CreateOfficeInput,
        UpdateOfficeInput,
        DeleteOfficeInput,
        SearchOfficeInput
      >
    >(GRPC_OFFICE_SERVICE_NAME);
  }
}
