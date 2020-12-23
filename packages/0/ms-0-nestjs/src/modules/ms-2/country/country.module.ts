import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { CountryResolver } from '@ms-0/modules/ms-2/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@ms-0/modules/ms-2/country/client/grpc/country-grpc.service';

@Module({
  providers: [grpcMs2, CountryResolver, CountryGrpcService],
})
export class CountryModule {}
