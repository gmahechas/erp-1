import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { CityResolver } from '@ms-0/modules/ms-3/city/server/graphql/city.resolver';
import { CityGrpcService } from '@ms-0/modules/ms-3/city/client/grpc/city-grpc.service';

@Module({
  providers: [grpcMs3, CityResolver, CityGrpcService],
})
export class CityModule {}
