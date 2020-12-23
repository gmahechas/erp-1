import { Module } from '@nestjs/common';

import { grpcMs5 } from '@ms-0/utils/grpc.providers';
import { MenuResolver } from '@ms-0/modules/ms-5/menu/server/graphql/menu.resolver';
import { MenuGrpcService } from '@ms-0/modules/ms-5/menu/client/grpc/menu-grpc.service';

@Module({
  providers: [grpcMs5, MenuResolver, MenuGrpcService],
})
export class MenuModule {}
