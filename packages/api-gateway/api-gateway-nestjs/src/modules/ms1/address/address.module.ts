import { Module } from '@nestjs/common';

import { grpcMs1 } from '@api-gateway-nestjs/utils/grpc.providers';
import { AddressResolver } from '@api-gateway-nestjs/modules/ms1/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms1/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs1, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
