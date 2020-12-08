import { Module } from '@nestjs/common';

import { grpcMs1 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CityResolver } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.resolver';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';

@Module({
  providers: [grpcMs1, CityResolver, CityGrpcService],
})
export class CityModule {}
