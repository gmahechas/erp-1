import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  IEntityServiceObservable,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_USER_SERVICE_NAME,
} from '@gmahechas/common-erp';
import { BaseGrpcService } from '@gmahechas/common-erp-nestjs';

import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Injectable()
export class UserGrpcService
  extends BaseGrpcService(GRPC_USER_SERVICE_NAME)
  implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
    UserType,
    CreateUserInput,
    UpdateUserInput,
    DeleteUserInput,
    SearchUserInput
  >;

  constructor(
    @Inject(GRPC_AUTH_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {
    super(grpcClient);
  }

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityServiceObservable<
        UserType,
        CreateUserInput,
        UpdateUserInput,
        DeleteUserInput,
        SearchUserInput
      >
    >(GRPC_USER_SERVICE_NAME);
  }
}
