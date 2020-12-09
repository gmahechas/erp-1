import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_COUNTRY_SERVICE_NAME } from '@gmahechas/common-erp';

import { countrySchema } from '@ms-1/modules/country/client/mongodb/country.schema';
import { CountryGrpcController } from '@ms-1/modules/country/server/grpc/country-grpc.controller';
import { CountryMongodbService } from '@ms-1/modules/country/client/mongodb/country-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'country',
        name: GRPC_COUNTRY_SERVICE_NAME,
        schema: countrySchema,
      },
    ]),
  ],
  controllers: [CountryGrpcController],
  providers: [CountryMongodbService],
})
export class CountryModule {}
