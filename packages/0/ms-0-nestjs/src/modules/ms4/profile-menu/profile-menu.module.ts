import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { ProfileMenuResolver } from '@ms-0/modules/ms4/profile-menu/server/graphql/profile-menu.resolver';
import { ProfileMenuGrpcService } from '@ms-0/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';

@Module({
  providers: [grpcMs4, ProfileMenuResolver, ProfileMenuGrpcService],
})
export class ProfileMenuModule {}
