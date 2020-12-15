import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { CompanyResolver } from '@ms-0/modules/ms2/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@ms-0/modules/ms2/company/client/grpc/company-grpc.service';

@Module({
  providers: [grpcMs2, CompanyResolver, CompanyGrpcService],
})
export class CompanyModule {}
