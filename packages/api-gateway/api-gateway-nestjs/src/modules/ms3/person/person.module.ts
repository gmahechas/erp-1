import { Module } from '@nestjs/common';

import { grpcMs3 } from '@api-gateway-nestjs/utils/grpc.providers';
import { PersonResolver } from '@api-gateway-nestjs/modules/ms3/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms3/person/client/grpc/person-grpc.service';

@Module({
  providers: [grpcMs3, PersonResolver, PersonGrpcService],
})
export class PersonModule {}
