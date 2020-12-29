import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { CompanyResolver } from '@ms-0/modules/ms-4/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@ms-0/modules/ms-4/company/client/grpc/company-grpc.service';

@Module({
  providers: [grpcMs4, CompanyResolver, CompanyGrpcService],
})
export class CompanyModule {}
