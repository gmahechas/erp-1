import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { cityJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';
import { CityType } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.type';
import {
  CreateCityInput,
  UpdateCityInput,
  DeleteCityInput,
  SearchCityInput,
} from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.input';

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
