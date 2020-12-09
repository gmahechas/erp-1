import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-api-gateway/utils/grpc.providers';
import { TypeIdentificationResolver } from '@ms-api-gateway/modules/ms3/type-identification/server/graphql/type-identification.resolver';
import { TypeIdentificationGrpcService } from '@ms-api-gateway/modules/ms3/type-identification/client/grpc/type-identification-grpc.service';

@Module({
  providers: [
    grpcMs3,
    TypeIdentificationResolver,
    TypeIdentificationGrpcService,
  ],
})
export class TypeIdentificationModule {}
