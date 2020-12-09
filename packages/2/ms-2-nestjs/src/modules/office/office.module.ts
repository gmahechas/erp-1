import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_OFFICE_SERVICE_NAME } from '@gmahechas/common-erp';

import { officeSchema } from '@ms-2/modules/office/client/mongodb/office.schema';
import { OfficeGrpcController } from '@ms-2/modules/office/server/grpc/office-grpc.controller';
import { OfficeMongodbService } from '@ms-2/modules/office/client/mongodb/office-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'office',
        name: GRPC_OFFICE_SERVICE_NAME,
        schema: officeSchema,
      },
    ]),
  ],
  controllers: [OfficeGrpcController],
  providers: [OfficeMongodbService],
})
export class OfficeModule {}
