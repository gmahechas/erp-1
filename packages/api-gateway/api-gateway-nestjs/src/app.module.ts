import { Module } from '@nestjs/common';

import { GraphqlModule } from '@api-gateway-nestjs/graphql.module';
import { UserModule } from '@api-gateway-nestjs/modules/auth/user/user.module';
import { AuthModule } from '@api-gateway-nestjs/modules/auth/auth/auth.module';
import { CountryModule } from '@api-gateway-nestjs/modules/ms1/country/country.module';
import { EstateModule } from '@api-gateway-nestjs/modules/ms1/estate/estate.module';
import { CityModule } from '@api-gateway-nestjs/modules/ms1/city/city.module';
import { AddressModule } from '@api-gateway-nestjs/modules/ms1/address/address.module';

@Module({
  imports: [
    GraphqlModule,
    UserModule /* auth */,
    AuthModule,
    CountryModule /* ms1 */,
    EstateModule,
    CityModule,
    AddressModule,
  ],
})
export class AppModule {}
