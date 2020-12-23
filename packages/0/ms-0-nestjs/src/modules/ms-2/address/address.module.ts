import { Module } from '@nestjs/common';

import { grpcMs2 } from '@ms-0/utils/grpc.providers';
import { AddressResolver } from '@ms-0/modules/ms-2/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@ms-0/modules/ms-2/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs2, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
