import { Module } from '@nestjs/common';

import { grpcMs2 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CompanyResolver } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms2/company/client/grpc/company-grpc.service';

@Module({
  providers: [grpcMs2, CompanyResolver, CompanyGrpcService],
})
export class CompanyModule {}
