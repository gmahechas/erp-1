import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { OfficeResolver } from '@ms-0/modules/ms-3/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@ms-0/modules/ms-3/office/client/grpc/office-grpc.service';

@Module({
  providers: [grpcMs3, OfficeResolver, OfficeGrpcService],
})
export class OfficeModule {}
