import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-api-gateway/utils/grpc.providers';
import { ProfileMenuResolver } from '@ms-api-gateway/modules/ms4/profile-menu/server/graphql/profile-menu.resolver';
import { ProfileMenuGrpcService } from '@ms-api-gateway/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';

@Module({
  providers: [grpcMs4, ProfileMenuResolver, ProfileMenuGrpcService],
})
export class ProfileMenuModule {}
