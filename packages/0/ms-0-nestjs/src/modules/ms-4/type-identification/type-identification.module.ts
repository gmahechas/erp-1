import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { TypeIdentificationResolver } from '@ms-0/modules/ms-4/type-identification/server/graphql/type-identification.resolver';
import { TypeIdentificationGrpcService } from '@ms-0/modules/ms-4/type-identification/client/grpc/type-identification-grpc.service';

@Module({
  providers: [
    grpcMs4,
    TypeIdentificationResolver,
    TypeIdentificationGrpcService,
  ],
})
export class TypeIdentificationModule {}
