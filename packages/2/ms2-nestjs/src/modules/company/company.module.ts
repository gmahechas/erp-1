import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GRPC_COMPANY_SERVICE_NAME } from '@gmahechas/common-erp';

import { companySchema } from '@ms2/modules/company/client/mongodb/company.schema';
import { CompanyGrpcController } from '@ms2/modules/company/server/grpc/company-grpc.controller';
import { CompanyMongodbService } from '@ms2/modules/company/client/mongodb/company-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'company',
        name: GRPC_COMPANY_SERVICE_NAME,
        schema: companySchema,
      },
    ]),
  ],
  controllers: [CompanyGrpcController],
  providers: [CompanyMongodbService],
})
export class CompanyModule {}
