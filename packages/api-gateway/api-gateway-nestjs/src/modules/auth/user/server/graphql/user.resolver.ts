import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  @Mutation(() => UserType, { name: `createOneUser` })
  createOne(
    @Args('entity', { type: () => CreateUserInput }) entity: CreateUserInput,
  ) {
    return this.userGrpcService.createOne({ entity });
  }

  @Query(() => UserType, { name: `searchByIdUser`, nullable: true })
  searchById(
    @Args('entity', { type: () => SearchUserInput }) entity: SearchUserInput,
  ) {
    return this.userGrpcService.searchById({ entity });
  }
}
