import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-api-gateway/utils/grpc.providers';
import { CountryResolver } from '@ms-api-gateway/modules/ms1/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@ms-api-gateway/modules/ms1/country/client/grpc/country-grpc.service';

@Module({
  providers: [grpcMs1, CountryResolver, CountryGrpcService],
})
export class CountryModule {}
