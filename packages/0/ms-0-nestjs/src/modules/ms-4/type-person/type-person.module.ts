import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { TypePersonResolver } from '@ms-0/modules/ms-4/type-person/server/graphql/type-person.resolver';
import { TypePersonGrpcService } from '@ms-0/modules/ms-4/type-person/client/grpc/type-person-grpc.service';

@Module({
  providers: [grpcMs4, TypePersonResolver, TypePersonGrpcService],
})
export class TypePersonModule {}
