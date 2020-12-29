import { Module } from '@nestjs/common';

import { grpcMs6 } from '@ms-0/utils/grpc.providers';
import { ProfileResolver } from '@ms-0/modules/ms-6/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@ms-0/modules/ms-6/profile/client/grpc/profile-grpc.service';

@Module({
  providers: [grpcMs6, ProfileResolver, ProfileGrpcService],
})
export class ProfileModule {}
