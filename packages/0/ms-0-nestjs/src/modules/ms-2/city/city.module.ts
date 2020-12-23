import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { CityResolver } from '@ms-0/modules/ms-2/city/server/graphql/city.resolver';
import { CityGrpcService } from '@ms-0/modules/ms-2/city/client/grpc/city-grpc.service';

@Module({
  providers: [grpcMs2, CityResolver, CityGrpcService],
})
export class CityModule {}
