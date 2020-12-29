import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { EstateResolver } from '@ms-0/modules/ms-3/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@ms-0/modules/ms-3/estate/client/grpc/estate-grpc.service';

@Module({
  providers: [grpcMs3, EstateResolver, EstateGrpcService],
})
export class EstateModule {}
