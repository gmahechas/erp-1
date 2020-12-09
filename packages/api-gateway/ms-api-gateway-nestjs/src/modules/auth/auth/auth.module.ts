import { Module } from '@nestjs/common';

import { grpcAuth } from '@ms-api-gateway/utils/grpc.providers';
import { AuthResolver } from '@ms-api-gateway/modules/auth/auth/server/graphql/auth.resolver';
import { AuthGrpcService } from '@ms-api-gateway/modules/auth/auth/client/grpc/auth-grpc.service';

@Module({
  providers: [grpcAuth, AuthResolver, AuthGrpcService],
})
export class AuthModule {}
