import { Module } from '@nestjs/common';

import { GraphqlModule } from '@api-gateway-nestjs/graphql.module';
import { UserModule } from '@api-gateway-nestjs/modules/auth/user/user.module';
import { AuthModule } from '@api-gateway-nestjs/modules/auth/auth/auth.module';
import { CountryModule } from '@api-gateway-nestjs/modules/ms1/country/country.module';
import { EstateModule } from '@api-gateway-nestjs/modules/ms1/estate/estate.module';
import { CityModule } from '@api-gateway-nestjs/modules/ms1/city/city.module';
import { AddressModule } from '@api-gateway-nestjs/modules/ms1/address/address.module';
import { CompanyModule } from '@api-gateway-nestjs/modules/ms2/company/company.module';
import { OfficeModule } from '@api-gateway-nestjs/modules/ms2/office/office.module';
import { TypePersonModule } from '@api-gateway-nestjs/modules/ms3/type-person/type-person.module';
import { TypeIdentificationModule } from '@api-gateway-nestjs/modules/ms3/type-identification/type-identification.module';
import { PersonModule } from '@api-gateway-nestjs/modules/ms3/person/person.module';
import { MenuModule } from '@api-gateway-nestjs/modules/ms4/menu/menu.module';
import { ProfileModule } from '@api-gateway-nestjs/modules/ms4/profile/profile.module';
import { ProfileMenuModule } from '@api-gateway-nestjs/modules/ms4/profile-menu/profile-menu.module';
import { UserProfileModule } from '@api-gateway-nestjs/modules/ms4/user-profile/user-profile.module';

@Module({
  imports: [
    GraphqlModule,
    UserModule /* auth */,
    AuthModule,
    CountryModule /* ms1 */,
    EstateModule,
    CityModule,
    AddressModule,
    CompanyModule /* ms2 */,
    OfficeModule,
    TypePersonModule /* ms3 */,
    TypeIdentificationModule,
    PersonModule,
    MenuModule /* ms4 */,
    ProfileModule,
    ProfileMenuModule,
    UserProfileModule,
  ],
})
export class AppModule {}
