import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-2/utils/database.modules';
import { CountryModule } from '@ms-2/modules/country/country.module';
import { EstateModule } from '@ms-2/modules/estate/estate.module';
import { CityModule } from '@ms-2/modules/city/city.module';
import { AddressModule } from '@ms-2/modules/address/address.module';

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
