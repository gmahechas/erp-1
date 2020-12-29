import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_PERSON_SERVICE_NAME } from '@gmahechas/common-erp';

import { personSchema } from '@ms-5/modules/person/client/mongodb/person.schema';
import { PersonGrpcController } from '@ms-5/modules/person/server/grpc/person-grpc.controller';
import { PersonMongodbService } from '@ms-5/modules/person/client/mongodb/person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'person',
        name: GRPC_PERSON_SERVICE_NAME,
        schema: personSchema,
      },
    ]),
  ],
  controllers: [PersonGrpcController],
  providers: [PersonMongodbService],
})
export class PersonModule {}
