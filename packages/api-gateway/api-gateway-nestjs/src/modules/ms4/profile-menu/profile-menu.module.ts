import { Module } from '@nestjs/common';

import { grpcMs4 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileMenuResolver } from '@api-gateway-nestjs/modules/ms4/profile-menu/server/graphql/profile-menu.resolver';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';

@Module({
  providers: [grpcMs4, ProfileMenuResolver, ProfileMenuGrpcService],
})
export class ProfileMenuModule {}
