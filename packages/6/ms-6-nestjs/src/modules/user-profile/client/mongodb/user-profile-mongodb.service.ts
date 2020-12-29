import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateUserProfileInput,
  IUpdateUserProfileInput,
  IDeleteUserProfileInput,
  ISearchUserProfileInput,
  GRPC_USER_PROFILE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { UserProfileDocument } from '@ms-6/modules/user-profile/client/mongodb/user-profile.schema';

@Injectable()
export class UserProfileMongodbService extends BaseMongodbService<
  UserProfileDocument,
  ICreateUserProfileInput,
  IUpdateUserProfileInput,
  IDeleteUserProfileInput,
  ISearchUserProfileInput
>() {
  constructor(
    @InjectModel(GRPC_USER_PROFILE_SERVICE_NAME)
    private readonly userProfileModel: Model<UserProfileDocument>,
  ) {
    super(userProfileModel);
  }
}
