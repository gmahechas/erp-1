import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateProfileMenuInput,
  IUpdateProfileMenuInput,
  IDeleteProfileMenuInput,
  ISearchProfileMenuInput,
  GRPC_PROFILE_MENU_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { ProfileMenuDocument } from '@ms-5/modules/profile-menu/client/mongodb/profile-menu.schema';

@Injectable()
export class ProfileMenuMongodbService extends BaseMongodbService<
  ProfileMenuDocument,
  ICreateProfileMenuInput,
  IUpdateProfileMenuInput,
  IDeleteProfileMenuInput,
  ISearchProfileMenuInput
>() {
  constructor(
    @InjectModel(GRPC_PROFILE_MENU_SERVICE_NAME)
    private readonly profileMenuModel: Model<ProfileMenuDocument>,
  ) {
    super(profileMenuModel);
  }
}
