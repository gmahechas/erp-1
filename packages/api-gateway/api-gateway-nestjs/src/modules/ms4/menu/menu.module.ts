import { Module } from '@nestjs/common';

import { grpcMs4 } from '@api-gateway-nestjs/utils/grpc.providers';
import { MenuResolver } from '@api-gateway-nestjs/modules/ms4/menu/server/graphql/menu.resolver';
import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms4/menu/client/grpc/menu-grpc.service';

@Module({
  providers: [grpcMs4, MenuResolver, MenuGrpcService],
})
export class MenuModule {}
