import { Controller } from '@nestjs/common';

import {
  ICity,
  ICreateCityInput,
  IUpdateCityInput,
  IDeleteCityInput,
  ISearchCityInput,
  GRPC_CITY_SERVICE_NAME,
  cityJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { CityMongodbService } from '@ms-3/modules/city/client/mongodb/city-mongodb.service';

@Controller()
export class CityGrpcController extends BaseGrpcController<
  ICity,
  ICreateCityInput,
  IUpdateCityInput,
  IDeleteCityInput,
  ISearchCityInput
>(GRPC_CITY_SERVICE_NAME, cityJoiSchema) {
  constructor(private readonly cityMongodbService: CityMongodbService) {
    super(cityMongodbService);
  }
}
