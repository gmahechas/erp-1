import { Module } from '@nestjs/common';

import { GraphqlModule } from '@ms-0/graphql.module';
import { UserModule } from '@ms-0/modules/auth/user/user.module';
import { AuthModule } from '@ms-0/modules/auth/auth/auth.module';
import { CountryModule } from '@ms-0/modules/ms1/country/country.module';
import { EstateModule } from '@ms-0/modules/ms1/estate/estate.module';
import { CityModule } from '@ms-0/modules/ms1/city/city.module';
import { AddressModule } from '@ms-0/modules/ms1/address/address.module';
import { CompanyModule } from '@ms-0/modules/ms2/company/company.module';
import { OfficeModule } from '@ms-0/modules/ms2/office/office.module';
import { TypePersonModule } from '@ms-0/modules/ms3/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-0/modules/ms3/type-identification/type-identification.module';
import { PersonModule } from '@ms-0/modules/ms3/person/person.module';
import { MenuModule } from '@ms-0/modules/ms4/menu/menu.module';
import { ProfileModule } from '@ms-0/modules/ms4/profile/profile.module';
import { ProfileMenuModule } from '@ms-0/modules/ms4/profile-menu/profile-menu.module';
import { UserProfileModule } from '@ms-0/modules/ms4/user-profile/user-profile.module';

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
