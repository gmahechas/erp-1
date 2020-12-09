import { Controller } from '@nestjs/common';

import {
  ICountry,
  ICreateCountryInput,
  IUpdateCountryInput,
  IDeleteCountryInput,
  ISearchCountryInput,
  GRPC_COUNTRY_SERVICE_NAME,
  countryJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { CountryMongodbService } from '@ms-1/modules/country/client/mongodb/country-mongodb.service';

@Controller()
export class CountryGrpcController extends BaseGrpcController<
  ICountry,
  ICreateCountryInput,
  IUpdateCountryInput,
  IDeleteCountryInput,
  ISearchCountryInput
>(GRPC_COUNTRY_SERVICE_NAME, countryJoiSchema) {
  constructor(private readonly countryMongodbService: CountryMongodbService) {
    super(countryMongodbService);
  }
}
