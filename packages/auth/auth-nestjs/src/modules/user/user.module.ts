import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_USER_SERVICE_NAME } from '@gmahechas/common-erp';

import { userSchema } from '@auth/modules/user/client/mongodb/user.schema';
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
