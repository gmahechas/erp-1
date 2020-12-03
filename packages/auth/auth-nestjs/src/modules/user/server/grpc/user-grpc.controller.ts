import { Controller } from '@nestjs/common';
import {
  IUser,
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput,
  GRPC_USER_SERVICE_NAME,
  userJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController extends BaseGrpcController<
  IUser,
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput
>(GRPC_USER_SERVICE_NAME, userJoiSchema) {
  constructor(private readonly userMongodbService: UserMongodbService) {
    super(userMongodbService);
  }
}
