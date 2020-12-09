import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-api-gateway/utils/grpc.providers';
import { MenuResolver } from '@ms-api-gateway/modules/ms4/menu/server/graphql/menu.resolver';
import { MenuGrpcService } from '@ms-api-gateway/modules/ms4/menu/client/grpc/menu-grpc.service';

@Module({
  providers: [grpcMs4, MenuResolver, MenuGrpcService],
})
export class MenuModule {}
