import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_ESTATE_SERVICE_NAME } from '@gmahechas/common-erp';

import { estateSchema } from '@ms-1/modules/estate/client/mongodb/estate.schema';
import { EstateGrpcController } from '@ms-1/modules/estate/server/grpc/estate-grpc.controller';
import { EstateMongodbService } from '@ms-1/modules/estate/client/mongodb/estate-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'estate',
        name: GRPC_ESTATE_SERVICE_NAME,
        schema: estateSchema,
      },
    ]),
  ],
  controllers: [EstateGrpcController],
  providers: [EstateMongodbService],
})
export class EstateModule {}
