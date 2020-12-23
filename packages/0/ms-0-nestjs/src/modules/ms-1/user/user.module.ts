import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { UserResolver } from '@ms-0/modules/ms-1/user/server/graphql/user.resolver';
import { UserGrpcService } from '@ms-0/modules/ms-1/user/client/grpc/user-grpc.service';

@Module({
  providers: [grpcMs1, UserResolver, UserGrpcService],
})
export class UserModule {}
