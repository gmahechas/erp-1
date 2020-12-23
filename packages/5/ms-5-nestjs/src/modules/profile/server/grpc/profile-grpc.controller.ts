import { Controller } from '@nestjs/common';

import {
  IProfile,
  ICreateProfileInput,
  IUpdateProfileInput,
  IDeleteProfileInput,
  ISearchProfileInput,
  GRPC_PROFILE_SERVICE_NAME,
  profileJoiSchema,
} from '@gmahechas/common-erp';
import { BaseGrpcController } from '@gmahechas/common-erp-nestjs';

import { ProfileMongodbService } from '@ms-5/modules/profile/client/mongodb/profile-mongodb.service';

@Controller()
export class ProfileGrpcController extends BaseGrpcController<
  IProfile,
  ICreateProfileInput,
  IUpdateProfileInput,
  IDeleteProfileInput,
  ISearchProfileInput
>(GRPC_PROFILE_SERVICE_NAME, profileJoiSchema) {
  constructor(private readonly profileMongodbService: ProfileMongodbService) {
    super(profileMongodbService);
  }
}
