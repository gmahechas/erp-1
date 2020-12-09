import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-api-gateway/utils/grpc.providers';
import { TypePersonResolver } from '@ms-api-gateway/modules/ms3/type-person/server/graphql/type-person.resolver';
import { TypePersonGrpcService } from '@ms-api-gateway/modules/ms3/type-person/client/grpc/type-person-grpc.service';

@Module({
  providers: [grpcMs3, TypePersonResolver, TypePersonGrpcService],
})
export class TypePersonModule {}
