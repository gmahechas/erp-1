import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { EstateResolver } from '@ms-0/modules/ms1/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@ms-0/modules/ms1/estate/client/grpc/estate-grpc.service';

@Module({
  providers: [grpcMs1, EstateResolver, EstateGrpcService],
})
export class EstateModule {}
