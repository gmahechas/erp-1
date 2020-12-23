import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_USER_PROFILE_SERVICE_NAME } from '@gmahechas/common-erp';

import { userProfileSchema } from '@ms-5/modules/user-profile/client/mongodb/user-profile.schema';
import { UserProfileGrpcController } from '@ms-5/modules/user-profile/server/grpc/user-profile-grpc.controller';
import { UserProfileMongodbService } from '@ms-5/modules/user-profile/client/mongodb/user-profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'userProfile',
        name: GRPC_USER_PROFILE_SERVICE_NAME,
        schema: userProfileSchema,
      },
    ]),
  ],
  controllers: [UserProfileGrpcController],
  providers: [UserProfileMongodbService],
})
export class UserProfileModule {}
