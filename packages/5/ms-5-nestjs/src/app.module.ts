import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-5/utils/database.modules';
import { TypePersonModule } from '@ms-5/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-5/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms-5/modules/person/person.module';

@Module({
  imports: [
    ...databasesModules,
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ],
})
export class AppModule {}
