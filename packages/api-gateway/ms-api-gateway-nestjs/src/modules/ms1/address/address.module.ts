import { Module } from '@nestjs/common';

import { grpcMs1 } from '@ms-api-gateway/utils/grpc.providers';
import { AddressResolver } from '@ms-api-gateway/modules/ms1/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@ms-api-gateway/modules/ms1/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs1, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
