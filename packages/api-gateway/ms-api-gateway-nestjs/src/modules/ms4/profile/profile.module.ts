import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-api-gateway/utils/grpc.providers';
import { ProfileResolver } from '@ms-api-gateway/modules/ms4/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@ms-api-gateway/modules/ms4/profile/client/grpc/profile-grpc.service';

@Module({
  providers: [grpcMs4, ProfileResolver, ProfileGrpcService],
})
export class ProfileModule {}
