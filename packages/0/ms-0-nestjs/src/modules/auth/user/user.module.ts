import { Module } from '@nestjs/common';

import { grpcAuth } from '@ms-0/utils/grpc.providers';
import { UserResolver } from '@ms-0/modules/auth/user/server/graphql/user.resolver';
import { UserGrpcService } from '@ms-0/modules/auth/user/client/grpc/user-grpc.service';

@Module({
  providers: [grpcAuth, UserResolver, UserGrpcService],
})
export class UserModule {}
