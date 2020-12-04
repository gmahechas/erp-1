import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_CITY_SERVICE_NAME } from '@gmahechas/common-erp';

import { citySchema } from '@ms1/modules/city/client/mongodb/city.schema';
import { CityGrpcController } from '@ms1/modules/city/server/grpc/city-grpc.controller';
import { CityMongodbService } from '@ms1/modules/city/client/mongodb/city-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'city',
        name: GRPC_CITY_SERVICE_NAME,
        schema: citySchema,
      },
    ]),
  ],
  controllers: [CityGrpcController],
  providers: [CityMongodbService],
})
export class CityModule {}
