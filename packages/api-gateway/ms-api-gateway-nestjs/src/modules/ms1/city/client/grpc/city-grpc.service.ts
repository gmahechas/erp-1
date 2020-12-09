import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS1_PACKAGE_NAME,
  GRPC_CITY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { CityType } from '@ms-api-gateway/modules/ms1/city/server/graphql/city.type';
import {
  CreateCityInput,
  UpdateCityInput,
  DeleteCityInput,
  SearchCityInput,
} from '@ms-api-gateway/modules/ms1/city/server/graphql/city.input';

@Injectable()
export class CityGrpcService
  extends BaseGrpcService(GRPC_CITY_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    CityType,
    CreateCityInput,
    UpdateCityInput,
    DeleteCityInput,
    SearchCityInput
  >;

  constructor(
    @Inject(GRPC_MS1_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        CityType,
        CreateCityInput,
        UpdateCityInput,
        DeleteCityInput,
        SearchCityInput
      >
    >(GRPC_CITY_SERVICE_NAME);
  }
}
