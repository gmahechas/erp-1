import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  IEntityService,
  IEntityMany,
  IEntityOne,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_USER_SERVICE_NAME,
} from '@gmahechas/common-erp';

import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.input';

@Injectable()
export class UserGrpcService implements OnModuleInit {
  private grpcService: IEntityService<
    UserType,
    CreateUserInput,
    UpdateUserInput,
    DeleteUserInput,
    SearchUserInput
  >;

  constructor(
    @Inject(GRPC_AUTH_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityService<
        UserType,
        CreateUserInput,
        UpdateUserInput,
        DeleteUserInput,
        SearchUserInput
      >
    >(GRPC_USER_SERVICE_NAME);
  }

  createOne(data: IEntityOne<CreateUserInput>): Observable<UserType> {
    return this.grpcService.createOne(data).pipe(pluck('entity'));
  }

  updateOne(data: IEntityOne<UpdateUserInput>): Observable<UserType> {
    return this.grpcService.updateOne(data).pipe(pluck('entity'));
  }

  deleteOne(data: IEntityOne<DeleteUserInput>): Observable<UserType> {
    return this.grpcService.deleteOne(data).pipe(pluck('entity'));
  }

  searchById(data: IEntityOne<SearchUserInput>): Observable<UserType> {
    return this.grpcService.searchById(data).pipe(pluck('entity'));
  }

  searchMany(data: IEntityMany<SearchUserInput>): Observable<UserType[]> {
    return this.grpcService.searchMany(data).pipe(pluck('entities'));
  }
}
