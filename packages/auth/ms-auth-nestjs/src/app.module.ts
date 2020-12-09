import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-auth/utils/database.modules';
import { UserModule } from '@ms-auth/modules/user/user.module';
import { AuthModule } from '@ms-auth/modules/auth/auth.module';

@Module({
  imports: [...databasesModules, UserModule, AuthModule],
})
export class AppModule {}
