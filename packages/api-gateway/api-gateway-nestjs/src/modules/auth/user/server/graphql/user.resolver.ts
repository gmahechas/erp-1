import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { userJoiSchema } from '@gmahechas/common-erp';
import { GraphqlValidationPipe } from '@gmahechas/common-erp-nestjs';

import { AuthGuard } from '@api-gateway-nestjs/utils/gql-auth.guard';
import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Resolver()
@UseGuards(AuthGuard)
export class UserResolver {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  @Mutation(() => UserType, { name: `createOneUser`, nullable: true })
  createOne(
    @Args('entity', new GraphqlValidationPipe(userJoiSchema.create))
    entity: CreateUserInput,
  ): Promise<Partial<UserType>> {
    return this.userGrpcService.createOne({ entity });
  }

  @Mutation(() => UserType, { name: `updateOneUser`, nullable: true })
  updateOne(
    @Args('entity', new GraphqlValidationPipe(userJoiSchema.update))
    entity: UpdateUserInput,
  ): Promise<Partial<UserType>> {
    return this.userGrpcService.updateOne({ entity });
  }

  @Mutation(() => UserType, { name: `deleteOneUser`, nullable: true })
  deleteOne(
    @Args('entity', new GraphqlValidationPipe(userJoiSchema.delete))
    entity: DeleteUserInput,
  ): Promise<Partial<UserType>> {
    return this.userGrpcService.deleteOne({ entity });
  }

  @Query(() => UserType, { name: `searchOneUser`, nullable: true })
  searchOne(
    @Args('entity') entity: SearchUserInput,
  ): Promise<Partial<UserType>> {
    return this.userGrpcService.searchOne({ entity });
  }

  @Query(() => [UserType], { name: `searchManyUser`, nullable: true })
  searchMany(
    @Args('entities', { type: () => [SearchUserInput] })
    entities: [SearchUserInput],
  ): Promise<Partial<UserType>[]> {
    return this.userGrpcService.searchMany({ entities });
  }
}
