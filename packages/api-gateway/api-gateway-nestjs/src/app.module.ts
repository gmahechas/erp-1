import { Module } from '@nestjs/common';

import { GraphqlModule } from '@api-gateway-nestjs/graphql.module';
import { UserModule } from '@api-gateway-nestjs/modules/auth/user/user.module';
import { AuthModule } from './modules/auth/auth/auth.module';

@Module({
  imports: [GraphqlModule, UserModule /* auth */, AuthModule],
})
export class AppModule {}
