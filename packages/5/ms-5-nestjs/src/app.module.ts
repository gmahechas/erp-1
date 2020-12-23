import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-5/utils/database.modules';
import { MenuModule } from '@ms-5/modules/menu/menu.module';
import { ProfileModule } from '@ms-5/modules/profile/profile.module';
import { ProfileMenuModule } from '@ms-5/modules/profile-menu/profile-menu.module';
import { UserProfileModule } from '@ms-5/modules/user-profile/user-profile.module';

@Module({
  imports: [
    ...databasesModules,
    MenuModule,
    ProfileModule,
    ProfileMenuModule,
    UserProfileModule,
  ],
})
export class AppModule {}
