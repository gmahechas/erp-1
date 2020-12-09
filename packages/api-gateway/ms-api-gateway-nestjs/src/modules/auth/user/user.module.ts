import { Module } from '@nestjs/common';

import { grpcAuth } from '@ms-api-gateway/utils/grpc.providers';
import { UserResolver } from '@ms-api-gateway/modules/auth/user/server/graphql/user.resolver';
import { UserGrpcService } from '@ms-api-gateway/modules/auth/user/client/grpc/user-grpc.service';

@Module({
  providers: [grpcAuth, UserResolver, UserGrpcService],
})
export class UserModule {}
