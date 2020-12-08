import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { userProfileJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';
import { UserProfileType } from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.type';
import {
  CreateUserProfileInput,
  UpdateUserProfileInput,
  DeleteUserProfileInput,
  SearchUserProfileInput,
} from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class UserProfileResolver extends BaseResolver(
  UserProfileType,
  CreateUserProfileInput,
  UpdateUserProfileInput,
  DeleteUserProfileInput,
  SearchUserProfileInput,
  'UserProfile',
  userProfileJoiSchema,
) {
  constructor(private readonly userProfileGrpcService: UserProfileGrpcService) {
    super(userProfileGrpcService);
  }
}
