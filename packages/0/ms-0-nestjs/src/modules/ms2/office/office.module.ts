import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { OfficeResolver } from '@ms-0/modules/ms2/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@ms-0/modules/ms2/office/client/grpc/office-grpc.service';

@Module({
  providers: [grpcMs2, OfficeResolver, OfficeGrpcService],
})
export class OfficeModule {}
