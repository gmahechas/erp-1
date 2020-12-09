import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-api-gateway/utils/grpc.providers';
import { OfficeResolver } from '@ms-api-gateway/modules/ms2/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@ms-api-gateway/modules/ms2/office/client/grpc/office-grpc.service';

@Module({
  providers: [grpcMs2, OfficeResolver, OfficeGrpcService],
})
export class OfficeModule {}
