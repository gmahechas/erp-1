import { Module } from '@nestjs/common';

import { AuthGrpcController } from '@ms-1/modules/auth/server/grpc/auth-grpc.controller';
import { UserModule } from '@ms-1/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthGrpcController],
})
export class AuthModule {}
