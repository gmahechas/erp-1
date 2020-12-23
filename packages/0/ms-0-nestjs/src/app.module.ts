import { Module } from '@nestjs/common';

import { GraphqlModule } from '@ms-0/graphql.module';
import { UserModule } from '@ms-0/modules/ms-1/user/user.module';
import { AuthModule } from '@ms-0/modules/ms-1/auth/auth.module';
import { CountryModule } from '@ms-0/modules/ms-2/country/country.module';
import { EstateModule } from '@ms-0/modules/ms-2/estate/estate.module';
import { CityModule } from '@ms-0/modules/ms-2/city/city.module';
import { AddressModule } from '@ms-0/modules/ms-2/address/address.module';
import { CompanyModule } from '@ms-0/modules/ms-3/company/company.module';
import { OfficeModule } from '@ms-0/modules/ms-3/office/office.module';
import { TypePersonModule } from '@ms-0/modules/ms-4/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-0/modules/ms-4/type-identification/type-identification.module';
import { PersonModule } from '@ms-0/modules/ms-4/person/person.module';
import { MenuModule } from '@ms-0/modules/ms-5/menu/menu.module';
import { ProfileModule } from '@ms-0/modules/ms-5/profile/profile.module';
import { ProfileMenuModule } from '@ms-0/modules/ms-5/profile-menu/profile-menu.module';
import { UserProfileModule } from '@ms-0/modules/ms-5/user-profile/user-profile.module';

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
