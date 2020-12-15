import { Module } from '@nestjs/common';

import { grpcMs4 } from '@ms-0/utils/grpc.providers';
import { UserProfileResolver } from '@ms-0/modules/ms4/user-profile/server/graphql/user-profile.resolver';
import { UserProfileGrpcService } from '@ms-0/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';

@Module({
  providers: [grpcMs4, UserProfileResolver, UserProfileGrpcService],
})
export class UserProfileModule {}
