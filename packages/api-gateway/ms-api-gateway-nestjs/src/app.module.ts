import { Module } from '@nestjs/common';

import { GraphqlModule } from '@ms-api-gateway/graphql.module';
import { UserModule } from '@ms-api-gateway/modules/auth/user/user.module';
import { AuthModule } from '@ms-api-gateway/modules/auth/auth/auth.module';
import { CountryModule } from '@ms-api-gateway/modules/ms1/country/country.module';
import { EstateModule } from '@ms-api-gateway/modules/ms1/estate/estate.module';
import { CityModule } from '@ms-api-gateway/modules/ms1/city/city.module';
import { AddressModule } from '@ms-api-gateway/modules/ms1/address/address.module';
import { CompanyModule } from '@ms-api-gateway/modules/ms2/company/company.module';
import { OfficeModule } from '@ms-api-gateway/modules/ms2/office/office.module';
import { TypePersonModule } from '@ms-api-gateway/modules/ms3/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-api-gateway/modules/ms3/type-identification/type-identification.module';
import { PersonModule } from '@ms-api-gateway/modules/ms3/person/person.module';
import { MenuModule } from '@ms-api-gateway/modules/ms4/menu/menu.module';
import { ProfileModule } from '@ms-api-gateway/modules/ms4/profile/profile.module';
import { ProfileMenuModule } from '@ms-api-gateway/modules/ms4/profile-menu/profile-menu.module';
import { UserProfileModule } from '@ms-api-gateway/modules/ms4/user-profile/user-profile.module';

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
