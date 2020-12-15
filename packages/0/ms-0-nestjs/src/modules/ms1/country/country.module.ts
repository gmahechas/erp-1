import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { CountryResolver } from '@ms-0/modules/ms1/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@ms-0/modules/ms1/country/client/grpc/country-grpc.service';

@Module({
  providers: [grpcMs1, CountryResolver, CountryGrpcService],
})
export class CountryModule {}
