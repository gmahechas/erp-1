import { Module } from '@nestjs/common';

import { grpcMs1 } from '@api-gateway-nestjs/utils/grpc.providers';
import { EstateResolver } from '@api-gateway-nestjs/modules/ms1/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms1/estate/client/grpc/estate-grpc.service';

@Module({
  providers: [grpcMs1, EstateResolver, EstateGrpcService],
})
export class EstateModule {}
