import { Controller } from '@nestjs/common';

import {
  IProfileMenu,
  ICreateProfileMenuInput,
  IUpdateProfileMenuInput,
  IDeleteProfileMenuInput,
  ISearchProfileMenuInput,
  GRPC_PROFILE_MENU_SERVICE_NAME,
  profileMenuJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { ProfileMenuMongodbService } from '@ms4/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

@Controller()
export class ProfileMenuGrpcController extends BaseGrpcController<
  IProfileMenu,
  ICreateProfileMenuInput,
  IUpdateProfileMenuInput,
  IDeleteProfileMenuInput,
  ISearchProfileMenuInput
>(GRPC_PROFILE_MENU_SERVICE_NAME, profileMenuJoiSchema) {
  constructor(
    private readonly profileMenuMongodbService: ProfileMenuMongodbService,
  ) {
    super(profileMenuMongodbService);
  }
}
