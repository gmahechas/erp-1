import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput,
  GRPC_USER_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseMongodbService } from '@gmahechas/common-erp-nestjs';
import { UserDocument } from '@auth/modules/user/client/mongodb/user.schema';

@Injectable()
export class UserMongodbService extends BaseMongodbService<
  UserDocument,
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput
>() {
  constructor(
    @InjectModel(GRPC_USER_SERVICE_NAME)
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
