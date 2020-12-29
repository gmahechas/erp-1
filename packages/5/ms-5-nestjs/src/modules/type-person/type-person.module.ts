import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_TYPE_PERSON_SERVICE_NAME } from '@gmahechas/common-erp';

import { typePersonSchema } from '@ms-5/modules/type-person/client/mongodb/type-person.schema';
import { TypePersonGrpcController } from '@ms-5/modules/type-person/server/grpc/type-person-grpc.controller';
import { TypePersonMongodbService } from '@ms-5/modules/type-person/client/mongodb/type-person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'typePerson',
        name: GRPC_TYPE_PERSON_SERVICE_NAME,
        schema: typePersonSchema,
      },
    ]),
  ],
  controllers: [TypePersonGrpcController],
  providers: [TypePersonMongodbService],
})
export class TypePersonModule {}
