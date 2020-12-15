import { Module } from '@nestjs/common';

import { grpcAuth } from '@ms-0/utils/grpc.providers';
import { AuthResolver } from '@ms-0/modules/auth/auth/server/graphql/auth.resolver';
import { AuthGrpcService } from '@ms-0/modules/auth/auth/client/grpc/auth-grpc.service';

@Module({
  providers: [grpcAuth, AuthResolver, AuthGrpcService],
})
export class AuthModule {}
