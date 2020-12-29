import { Module } from '@nestjs/common';

import { grpcMs3 } from '@ms-0/utils/grpc.providers';
import { AddressResolver } from '@ms-0/modules/ms-3/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@ms-0/modules/ms-3/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs3, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
