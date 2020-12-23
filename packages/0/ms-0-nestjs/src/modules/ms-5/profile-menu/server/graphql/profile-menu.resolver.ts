import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { profileMenuJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { ProfileMenuGrpcService } from '@ms-0/modules/ms-5/profile-menu/client/grpc/profile-menu-grpc.service';
import { ProfileMenuType } from '@ms-0/modules/ms-5/profile-menu/server/graphql/profile-menu.type';
import {
  CreateProfileMenuInput,
  UpdateProfileMenuInput,
  DeleteProfileMenuInput,
  SearchProfileMenuInput,
} from '@ms-0/modules/ms-5/profile-menu/server/graphql/profile-menu.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class ProfileMenuResolver extends BaseResolver(
  ProfileMenuType,
  CreateProfileMenuInput,
  UpdateProfileMenuInput,
  DeleteProfileMenuInput,
  SearchProfileMenuInput,
  'ProfileMenu',
  profileMenuJoiSchema,
) {
  constructor(private readonly profileMenuGrpcService: ProfileMenuGrpcService) {
    super(profileMenuGrpcService);
  }
}
