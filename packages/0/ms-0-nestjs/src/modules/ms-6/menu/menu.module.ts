import { Module } from '@nestjs/common';

import { grpcMs6 } from '@ms-0/utils/grpc.providers';
import { MenuResolver } from '@ms-0/modules/ms-6/menu/server/graphql/menu.resolver';
import { MenuGrpcService } from '@ms-0/modules/ms-6/menu/client/grpc/menu-grpc.service';

@Module({
  providers: [grpcMs6, MenuResolver, MenuGrpcService],
})
export class MenuModule {}
