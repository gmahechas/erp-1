import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_TYPE_IDENTIFICATION_SERVICE_NAME } from '@gmahechas/common-erp';

import { typeIdentificationSchema } from '@ms3/modules/type-identification/client/mongodb/type-identification.schema';
import { TypeIdentificationGrpcController } from '@ms3/modules/type-identification/server/grpc/type-identification-grpc.controller';
import { TypeIdentificationMongodbService } from '@ms3/modules/type-identification/client/mongodb/type-identification-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'typeIdentification',
        name: GRPC_TYPE_IDENTIFICATION_SERVICE_NAME,
        schema: typeIdentificationSchema,
      },
    ]),
  ],
  controllers: [TypeIdentificationGrpcController],
  providers: [TypeIdentificationMongodbService],
})
export class TypeIdentificationModule {}
