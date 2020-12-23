import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { PersonResolver } from '@ms-0/modules/ms-4/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@ms-0/modules/ms-4/person/client/grpc/person-grpc.service';

@Module({
  providers: [grpcMs4, PersonResolver, PersonGrpcService],
})
export class PersonModule {}
