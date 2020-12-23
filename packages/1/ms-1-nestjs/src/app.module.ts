import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-1/utils/database.modules';
import { UserModule } from '@ms-1/modules/user/user.module';
import { AuthModule } from '@ms-1/modules/auth/auth.module';

@Module({
  imports: [...databasesModules, UserModule, AuthModule],
})
export class AppModule {}
