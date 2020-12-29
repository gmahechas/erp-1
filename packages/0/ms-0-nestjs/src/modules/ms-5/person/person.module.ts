import { Module } from '@nestjs/common';

import { grpcMs5 } from '@ms-0/utils/grpc.providers';
import { PersonResolver } from '@ms-0/modules/ms-5/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@ms-0/modules/ms-5/person/client/grpc/person-grpc.service';

@Module({
  providers: [grpcMs5, PersonResolver, PersonGrpcService],
})
export class PersonModule {}
