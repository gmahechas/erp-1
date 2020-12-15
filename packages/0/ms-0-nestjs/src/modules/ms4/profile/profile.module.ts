import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { ProfileResolver } from '@ms-0/modules/ms4/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@ms-0/modules/ms4/profile/client/grpc/profile-grpc.service';

@Module({
  providers: [grpcMs4, ProfileResolver, ProfileGrpcService],
})
export class ProfileModule {}
