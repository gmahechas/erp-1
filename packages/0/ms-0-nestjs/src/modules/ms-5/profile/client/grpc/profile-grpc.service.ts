import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_MS_5_PACKAGE_NAME,
  GRPC_PROFILE_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { ProfileType } from '@ms-0/modules/ms-5/profile/server/graphql/profile.type';
import {
  CreateProfileInput,
  UpdateProfileInput,
  DeleteProfileInput,
  SearchProfileInput,
} from '@ms-0/modules/ms-5/profile/server/graphql/profile.input';

@Injectable()
export class ProfileGrpcService
  extends BaseGrpcService(GRPC_PROFILE_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    ProfileType,
    CreateProfileInput,
    UpdateProfileInput,
    DeleteProfileInput,
    SearchProfileInput
  >;

  constructor(
    @Inject(GRPC_MS_5_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        ProfileType,
        CreateProfileInput,
        UpdateProfileInput,
        DeleteProfileInput,
        SearchProfileInput
      >
    >(GRPC_PROFILE_SERVICE_NAME);
  }
}
