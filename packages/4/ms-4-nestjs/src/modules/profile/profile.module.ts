import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_PROFILE_SERVICE_NAME } from '@gmahechas/common-erp';

import { profileSchema } from '@ms-4/modules/profile/client/mongodb/profile.schema';
import { ProfileGrpcController } from '@ms-4/modules/profile/server/grpc/profile-grpc.controller';
import { ProfileMongodbService } from '@ms-4/modules/profile/client/mongodb/profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'profile',
        name: GRPC_PROFILE_SERVICE_NAME,
        schema: profileSchema,
      },
    ]),
  ],
  controllers: [ProfileGrpcController],
  providers: [ProfileMongodbService],
})
export class ProfileModule {}
