import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_PROFILE_MENU_SERVICE_NAME } from '@gmahechas/common-erp';

import { profileMenuSchema } from '@ms-5/modules/profile-menu/client/mongodb/profile-menu.schema';
import { ProfileMenuGrpcController } from '@ms-5/modules/profile-menu/server/grpc/profile-menu-grpc.controller';
import { ProfileMenuMongodbService } from '@ms-5/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'profileMenu',
        name: GRPC_PROFILE_MENU_SERVICE_NAME,
        schema: profileMenuSchema,
      },
    ]),
  ],
  controllers: [ProfileMenuGrpcController],
  providers: [ProfileMenuMongodbService],
})
export class ProfileMenuModule {}
