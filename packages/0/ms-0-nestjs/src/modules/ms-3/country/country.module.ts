import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { CountryResolver } from '@ms-0/modules/ms-3/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@ms-0/modules/ms-3/country/client/grpc/country-grpc.service';

@Module({
  providers: [grpcMs3, CountryResolver, CountryGrpcService],
})
export class CountryModule {}
