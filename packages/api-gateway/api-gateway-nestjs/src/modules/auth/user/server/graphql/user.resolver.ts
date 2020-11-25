import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { Observable } from 'rxjs';

import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  @Mutation(() => UserType, { name: `createOneUser`, nullable: true })
  createOne(@Args('entity') entity: CreateUserInput): Observable<UserType> {
    return this.userGrpcService.createOne({ entity });
  }

  @Mutation(() => UserType, { name: `updateOneUser`, nullable: true })
  updateOne(@Args('entity') entity: UpdateUserInput): Observable<UserType> {
    return this.userGrpcService.updateOne({ entity });
  }

  @Mutation(() => UserType, { name: `deleteOneUser`, nullable: true })
  deleteOne(@Args('entity') entity: DeleteUserInput): Observable<UserType> {
    return this.userGrpcService.deleteOne({ entity });
  }

  @Query(() => UserType, { name: `searchByIdUser`, nullable: true })
  searchById(@Args('entity') entity: SearchUserInput): Observable<UserType> {
    return this.userGrpcService.searchById({ entity });
  }

  @Query(() => [UserType], { name: `searchManyUser`, nullable: true })
  searchMany(
    @Args('entities', { type: () => [SearchUserInput] })
    entities: [SearchUserInput],
  ): Observable<UserType[]> {
    return this.userGrpcService.searchMany({ entities });
  }
}
