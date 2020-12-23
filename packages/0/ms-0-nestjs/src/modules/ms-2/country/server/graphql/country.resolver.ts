import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { countryJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { CountryGrpcService } from '@ms-0/modules/ms-2/country/client/grpc/country-grpc.service';
import { CountryType } from '@ms-0/modules/ms-2/country/server/graphql/country.type';
import {
  CreateCountryInput,
  UpdateCountryInput,
  DeleteCountryInput,
  SearchCountryInput,
} from '@ms-0/modules/ms-2/country/server/graphql/country.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CountryResolver extends BaseResolver(
  CountryType,
  CreateCountryInput,
  UpdateCountryInput,
  DeleteCountryInput,
  SearchCountryInput,
  'Country',
  countryJoiSchema,
) {
  constructor(private readonly countryGrpcService: CountryGrpcService) {
    super(countryGrpcService);
  }
}
