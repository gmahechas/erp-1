import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-api-gateway/utils/grpc.providers';
import { CityResolver } from '@ms-api-gateway/modules/ms1/city/server/graphql/city.resolver';
import { CityGrpcService } from '@ms-api-gateway/modules/ms1/city/client/grpc/city-grpc.service';

@Module({
  providers: [grpcMs1, CityResolver, CityGrpcService],
})
export class CityModule {}
