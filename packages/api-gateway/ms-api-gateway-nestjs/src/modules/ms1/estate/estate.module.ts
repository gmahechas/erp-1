import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-api-gateway/utils/grpc.providers';
import { EstateResolver } from '@ms-api-gateway/modules/ms1/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@ms-api-gateway/modules/ms1/estate/client/grpc/estate-grpc.service';

@Module({
  providers: [grpcMs1, EstateResolver, EstateGrpcService],
})
export class EstateModule {}
