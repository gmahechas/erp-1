import { UsePipes } from '@nestjs/common';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { Observable } from 'rxjs';

import { userJoiSchema } from '@gmahechas/common-erp';

import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';
import { JoiValidationPipe } from '@api-gateway-nestjs/utils/joi-validation.pipe';

@Resolver()
export class UserResolver {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  @Mutation(() => UserType, { name: `createOneUser`, nullable: true })
  @UsePipes(new JoiValidationPipe(userJoiSchema.create))
  createOne(
    @Args('entity') entity: CreateUserInput,
  ): Observable<Partial<UserType>> {
    return this.userGrpcService.createOne({ entity });
  }

  @Mutation(() => UserType, { name: `updateOneUser`, nullable: true })
  @UsePipes(new JoiValidationPipe(userJoiSchema.update))
  updateOne(
    @Args('entity') entity: UpdateUserInput,
  ): Observable<Partial<UserType>> {
    return this.userGrpcService.updateOne({ entity });
  }

  @Mutation(() => UserType, { name: `deleteOneUser`, nullable: true })
  @UsePipes(new JoiValidationPipe(userJoiSchema.delete))
  deleteOne(
    @Args('entity') entity: DeleteUserInput,
  ): Observable<Partial<UserType>> {
    return this.userGrpcService.deleteOne({ entity });
  }

  @Query(() => UserType, { name: `searchOneUser`, nullable: true })
  searchOne(
    @Args('entity') entity: SearchUserInput,
  ): Observable<Partial<UserType>> {
    return this.userGrpcService.searchOne({ entity });
  }

  @Query(() => [UserType], { name: `searchManyUser`, nullable: true })
  searchMany(
    @Args('entities', { type: () => [SearchUserInput] })
    entities: [SearchUserInput],
  ): Observable<Partial<UserType>[]> {
    return this.userGrpcService.searchMany({ entities });
  }
}
