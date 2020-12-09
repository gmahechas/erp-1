import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-3/utils/database.modules';
import { TypePersonModule } from '@ms-3/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-3/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms-3/modules/person/person.module';

@Module({
  imports: [
    ...databasesModules,
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ],
})
export class AppModule {}
