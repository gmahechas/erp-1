import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { CompanyResolver } from '@ms-0/modules/ms-3/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@ms-0/modules/ms-3/company/client/grpc/company-grpc.service';

@Module({
  providers: [grpcMs3, CompanyResolver, CompanyGrpcService],
})
export class CompanyModule {}
