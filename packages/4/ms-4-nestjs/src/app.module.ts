import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-4/utils/database.modules';
import { CompanyModule } from '@ms-4/modules/company/company.module';
import { OfficeModule } from '@ms-4/modules/office/office.module';

@Module({
  imports: [...databasesModules, CompanyModule, OfficeModule],
})
export class AppModule {}
