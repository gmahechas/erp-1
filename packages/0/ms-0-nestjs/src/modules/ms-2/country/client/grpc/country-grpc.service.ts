import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_2_PACKAGE_NAME,
  GRPC_COUNTRY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { CountryType } from '@ms-0/modules/ms-2/country/server/graphql/country.type';
import {
  CreateCountryInput,
  UpdateCountryInput,
  DeleteCountryInput,
  SearchCountryInput,
} from '@ms-0/modules/ms-2/country/server/graphql/country.input';

@Injectable()
export class CountryGrpcService
  extends BaseGrpcService(GRPC_COUNTRY_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    CountryType,
    CreateCountryInput,
    UpdateCountryInput,
    DeleteCountryInput,
    SearchCountryInput
  >;

  constructor(
    @Inject(GRPC_MS_2_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        CountryType,
        CreateCountryInput,
        UpdateCountryInput,
        DeleteCountryInput,
        SearchCountryInput
      >
    >(GRPC_COUNTRY_SERVICE_NAME);
  }
}
