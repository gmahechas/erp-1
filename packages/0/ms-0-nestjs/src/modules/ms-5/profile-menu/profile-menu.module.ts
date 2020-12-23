import { Module } from '@nestjs/common';

import { grpcMs5 } from '@ms-0/utils/grpc.providers';
import { ProfileMenuResolver } from '@ms-0/modules/ms-5/profile-menu/server/graphql/profile-menu.resolver';
import { ProfileMenuGrpcService } from '@ms-0/modules/ms-5/profile-menu/client/grpc/profile-menu-grpc.service';

@Module({
  providers: [grpcMs5, ProfileMenuResolver, ProfileMenuGrpcService],
})
export class ProfileMenuModule {}
