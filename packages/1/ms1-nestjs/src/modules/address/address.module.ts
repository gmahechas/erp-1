import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_ADDRESS_SERVICE_NAME } from '@gmahechas/common-erp';

import { addressSchema } from '@ms1/modules/address/client/mongodb/address.schema';
import { AddressGrpcController } from '@ms1/modules/address/server/grpc/address-grpc.controller';
import { AddressMongodbService } from '@ms1/modules/address/client/mongodb/address-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'address',
        name: GRPC_ADDRESS_SERVICE_NAME,
        schema: addressSchema,
      },
    ]),
  ],
  controllers: [AddressGrpcController],
  providers: [AddressMongodbService],
})
export class AddressModule {}
