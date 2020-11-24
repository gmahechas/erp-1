import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userSchema } from '@gmahechas/common-erp';

import { GRPC_USER_SERVICE_NAME } from '@auth/utils/constants';
import { UserGrpcController } from '@auth/modules/user/server/grpc/user-grpc.controller';
import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'user',
        name: GRPC_USER_SERVICE_NAME,
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UserGrpcController],
  providers: [UserMongodbService],
  exports: [UserMongodbService],
})
export class UserModule {}
