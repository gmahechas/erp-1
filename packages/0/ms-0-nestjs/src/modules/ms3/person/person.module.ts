import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { PersonResolver } from '@ms-0/modules/ms3/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@ms-0/modules/ms3/person/client/grpc/person-grpc.service';

@Module({
  providers: [grpcMs3, PersonResolver, PersonGrpcService],
})
export class PersonModule {}
