import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { profileJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { ProfileGrpcService } from '@ms-0/modules/ms-6/profile/client/grpc/profile-grpc.service';
import { ProfileType } from '@ms-0/modules/ms-6/profile/server/graphql/profile.type';
import {
  CreateProfileInput,
  UpdateProfileInput,
  DeleteProfileInput,
  SearchProfileInput,
} from '@ms-0/modules/ms-6/profile/server/graphql/profile.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class ProfileResolver extends BaseResolver(
  ProfileType,
  CreateProfileInput,
  UpdateProfileInput,
  DeleteProfileInput,
  SearchProfileInput,
  'Profile',
  profileJoiSchema,
) {
  constructor(private readonly profileGrpcService: ProfileGrpcService) {
    super(profileGrpcService);
  }
}
