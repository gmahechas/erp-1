import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateCityInput,
  IUpdateCityInput,
  IDeleteCityInput,
  ISearchCityInput,
  GRPC_CITY_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { CityDocument } from '@ms1/modules/city/client/mongodb/city.schema';

@Injectable()
export class CityMongodbService extends BaseMongodbService<
  CityDocument,
  ICreateCityInput,
  IUpdateCityInput,
  IDeleteCityInput,
  ISearchCityInput
>() {
  constructor(
    @InjectModel(GRPC_CITY_SERVICE_NAME)
    private readonly cityModel: Model<CityDocument>,
  ) {
    super(cityModel);
  }
}
