import { Controller } from '@nestjs/common';

import {
  IUserProfile,
  ICreateUserProfileInput,
  IUpdateUserProfileInput,
  IDeleteUserProfileInput,
  ISearchUserProfileInput,
  GRPC_USER_PROFILE_SERVICE_NAME,
  userProfileJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { UserProfileMongodbService } from '@ms-6/modules/user-profile/client/mongodb/user-profile-mongodb.service';

@Controller()
export class UserProfileGrpcController extends BaseGrpcController<
  IUserProfile,
  ICreateUserProfileInput,
  IUpdateUserProfileInput,
  IDeleteUserProfileInput,
  ISearchUserProfileInput
>(GRPC_USER_PROFILE_SERVICE_NAME, userProfileJoiSchema) {
  constructor(
    private readonly userProfileMongodbService: UserProfileMongodbService,
  ) {
    super(userProfileMongodbService);
  }
}
