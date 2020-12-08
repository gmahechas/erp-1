import { Module } from '@nestjs/common';

import { grpcMs3 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypeIdentificationResolver } from '@api-gateway-nestjs/modules/ms3/type-identification/server/graphql/type-identification.resolver';
import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms3/type-identification/client/grpc/type-identification-grpc.service';

@Module({
  providers: [
    grpcMs3,
    TypeIdentificationResolver,
    TypeIdentificationGrpcService,
  ],
})
export class TypeIdentificationModule {}
