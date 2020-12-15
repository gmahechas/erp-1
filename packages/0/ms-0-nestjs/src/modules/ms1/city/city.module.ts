import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { CityResolver } from '@ms-0/modules/ms1/city/server/graphql/city.resolver';
import { CityGrpcService } from '@ms-0/modules/ms1/city/client/grpc/city-grpc.service';

@Module({
  providers: [grpcMs1, CityResolver, CityGrpcService],
})
export class CityModule {}
