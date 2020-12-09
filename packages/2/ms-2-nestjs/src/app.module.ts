import { Module } from '@nestjs/common';

import { databasesModules } from '@ms-2/utils/database.modules';
import { CompanyModule } from '@ms-2/modules/company/company.module';
import { OfficeModule } from '@ms-2/modules/office/office.module';

@Module({
  imports: [...databasesModules, CompanyModule, OfficeModule],
})
export class AppModule {}
