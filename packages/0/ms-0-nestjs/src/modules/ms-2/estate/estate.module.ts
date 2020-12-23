import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { EstateResolver } from '@ms-0/modules/ms-2/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@ms-0/modules/ms-2/estate/client/grpc/estate-grpc.service';

@Module({
  providers: [grpcMs2, EstateResolver, EstateGrpcService],
})
export class EstateModule {}
