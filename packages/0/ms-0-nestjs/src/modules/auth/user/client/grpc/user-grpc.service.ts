import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  IEntityServiceObservable,
  IEntityMany,
  IEntityOne,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_USER_SERVICE_NAME,
  grpcErrorsHandler,
} from '@gmahechas/common-erp';

import { UserType } from '@ms-0/modules/auth/user/server/graphql/user.type';
import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  SearchUserInput,
} from '@ms-0/modules/auth/user/server/graphql/user.input';

@Injectable()
export class UserGrpcService implements OnModuleInit {
  private grpcService: IEntityServiceObservable<
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
      IEntityServiceObservable<
        UserType,
        CreateUserInput,
        UpdateUserInput,
        DeleteUserInput,
        SearchUserInput
      >
    >(GRPC_USER_SERVICE_NAME);
  }

  async createOne(
    data: IEntityOne<CreateUserInput>,
  ): Promise<IEntityOne<UserType>> {
    return await this.grpcService
      .createOne(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }

  async updateOne(
    data: IEntityOne<UpdateUserInput>,
  ): Promise<IEntityOne<UserType>> {
    return await this.grpcService
      .updateOne(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }

  async deleteOne(
    data: IEntityOne<DeleteUserInput>,
  ): Promise<IEntityOne<UserType>> {
    return await this.grpcService
      .deleteOne(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }

  async searchOne(
    data: IEntityOne<SearchUserInput>,
  ): Promise<IEntityOne<UserType>> {
    return await this.grpcService
      .searchOne(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }

  async searchMany(
    data: IEntityMany<SearchUserInput>,
  ): Promise<IEntityMany<UserType>> {
    return await this.grpcService
      .searchMany(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }
}
