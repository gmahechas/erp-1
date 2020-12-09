import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-1/utils/database.modules';
import { CountryModule } from '@ms-1/modules/country/country.module';
import { EstateModule } from '@ms-1/modules/estate/estate.module';
import { CityModule } from '@ms-1/modules/city/city.module';
import { AddressModule } from '@ms-1/modules/address/address.module';

@Module({
  imports: [
    ...databasesModules,
    CountryModule,
    EstateModule,
    CityModule,
    AddressModule,
  ],
})
export class AppModule {}
