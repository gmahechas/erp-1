import { Module } from '@nestjs/common';

import { AuthGrpcController } from '@ms-auth/modules/auth/server/grpc/auth-grpc.controller';
import { UserModule } from '@ms-auth/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthGrpcController],
})
export class AuthModule {}
