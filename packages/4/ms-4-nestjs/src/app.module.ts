import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-4/utils/database.modules';
import { TypePersonModule } from '@ms-4/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms-4/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms-4/modules/person/person.module';

@Module({
  imports: [
    ...databasesModules,
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ],
})
export class AppModule {}
