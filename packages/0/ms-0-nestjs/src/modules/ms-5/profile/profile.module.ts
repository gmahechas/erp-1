import { Module } from '@nestjs/common';

import { grpcMs5 } from '@ms-0/utils/grpc.providers';
import { ProfileResolver } from '@ms-0/modules/ms-5/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@ms-0/modules/ms-5/profile/client/grpc/profile-grpc.service';

@Module({
  providers: [grpcMs5, ProfileResolver, ProfileGrpcService],
})
export class ProfileModule {}
