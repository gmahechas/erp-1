import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { userJoiSchema } from '@gmahechas/common-erp';
import { BaseResolver, GqlAuthGuard } from '@gmahechas/common-erp-nestjs';

import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class UserResolver extends BaseResolver(
  UserType,
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
  'User',
  userJoiSchema,
) {
  constructor(private readonly userGrpcService: UserGrpcService) {
    super(userGrpcService);
  }
}
