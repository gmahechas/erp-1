import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS2_PACKAGE_NAME,
  GRPC_COMPANY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { CompanyType } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.type';
import {
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  SearchCompanyInput,
} from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.input';

@Injectable()
export class CompanyGrpcService
  extends BaseGrpcService(GRPC_COMPANY_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    CompanyType,
    CreateCompanyInput,
    UpdateCompanyInput,
    DeleteCompanyInput,
    SearchCompanyInput
  >;

  constructor(
    @Inject(GRPC_MS2_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        CompanyType,
        CreateCompanyInput,
        UpdateCompanyInput,
        DeleteCompanyInput,
        SearchCompanyInput
      >
    >(GRPC_COMPANY_SERVICE_NAME);
  }
}
