import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-api-gateway/utils/grpc.providers';
import { PersonResolver } from '@ms-api-gateway/modules/ms3/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@ms-api-gateway/modules/ms3/person/client/grpc/person-grpc.service';

@Module({
  providers: [grpcMs3, PersonResolver, PersonGrpcService],
})
export class PersonModule {}
