import { Module } from '@nestjs/common';

import { grpcMs5 } from '@ms-0/utils/grpc.providers';
import { TypePersonResolver } from '@ms-0/modules/ms-5/type-person/server/graphql/type-person.resolver';
import { TypePersonGrpcService } from '@ms-0/modules/ms-5/type-person/client/grpc/type-person-grpc.service';

@Module({
  providers: [grpcMs5, TypePersonResolver, TypePersonGrpcService],
})
export class TypePersonModule {}
