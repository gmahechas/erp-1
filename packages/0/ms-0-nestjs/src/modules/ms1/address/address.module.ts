import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-0/utils/grpc.providers';
import { AddressResolver } from '@ms-0/modules/ms1/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@ms-0/modules/ms1/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs1, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
