import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { AuthResolver } from '@ms-0/modules/ms-1/auth/server/graphql/auth.resolver';
import { AuthGrpcService } from '@ms-0/modules/ms-1/auth/client/grpc/auth-grpc.service';

@Module({
  providers: [grpcMs1, AuthResolver, AuthGrpcService],
})
export class AuthModule {}
