import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { cityJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { CityGrpcService } from '@ms-0/modules/ms-2/city/client/grpc/city-grpc.service';
import { CityType } from '@ms-0/modules/ms-2/city/server/graphql/city.type';
import {
  CreateCityInput,
  UpdateCityInput,
  DeleteCityInput,
  SearchCityInput,
} from '@ms-0/modules/ms-2/city/server/graphql/city.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CityResolver extends BaseResolver(
  CityType,
  CreateCityInput,
  UpdateCityInput,
  DeleteCityInput,
  SearchCityInput,
  'City',
  cityJoiSchema,
) {
  constructor(private readonly cityGrpcService: CityGrpcService) {
    super(cityGrpcService);
  }
}
