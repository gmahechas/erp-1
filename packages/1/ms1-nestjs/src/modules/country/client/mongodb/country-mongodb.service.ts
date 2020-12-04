import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateCountryInput,
  IUpdateCountryInput,
  IDeleteCountryInput,
  ISearchCountryInput,
  GRPC_COUNTRY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { CountryDocument } from '@ms1/modules/country/client/mongodb/country.schema';

@Injectable()
export class CountryMongodbService extends BaseMongodbService<
  CountryDocument,
  ICreateCountryInput,
  IUpdateCountryInput,
  IDeleteCountryInput,
  ISearchCountryInput
>() {
  constructor(
    @InjectModel(GRPC_COUNTRY_SERVICE_NAME)
    private readonly countryModel: Model<CountryDocument>,
  ) {
    super(countryModel);
  }
}
