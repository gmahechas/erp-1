import { Module } from '@nestjs/common';

import { grpcMs6 } from '@ms-0/utils/grpc.providers';
import { UserProfileResolver } from '@ms-0/modules/ms-6/user-profile/server/graphql/user-profile.resolver';
import { UserProfileGrpcService } from '@ms-0/modules/ms-6/user-profile/client/grpc/user-profile-grpc.service';

@Module({
  providers: [grpcMs6, UserProfileResolver, UserProfileGrpcService],
})
export class UserProfileModule {}
