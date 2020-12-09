import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateProfileInput,
  IUpdateProfileInput,
  IDeleteProfileInput,
  ISearchProfileInput,
  GRPC_PROFILE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { ProfileDocument } from '@ms-4/modules/profile/client/mongodb/profile.schema';

@Injectable()
export class ProfileMongodbService extends BaseMongodbService<
  ProfileDocument,
  ICreateProfileInput,
  IUpdateProfileInput,
  IDeleteProfileInput,
  ISearchProfileInput
>() {
  constructor(
    @InjectModel(GRPC_PROFILE_SERVICE_NAME)
    private readonly profileModel: Model<ProfileDocument>,
  ) {
    super(profileModel);
  }
}
