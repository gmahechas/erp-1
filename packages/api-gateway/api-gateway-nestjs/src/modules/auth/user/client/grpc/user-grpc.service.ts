import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { throwError } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';

import {
  IEntityServiceObservable,
  IEntityMany,
  IEntityOne,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_USER_SERVICE_NAME,
  grpcErrorsHandler,
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
  ): Promise<Partial<UserType>> {
    return await this.grpcService
      .createOne(data)
      .pipe(
        pluck('entity'),
        catchError((error) => throwError(grpcErrorsHandler(error))),
      )
      .toPromise();
  }

  async updateOne(
    data: IEntityOne<UpdateUserInput>,
  ): Promise<Partial<UserType>> {
    return await this.grpcService
      .updateOne(data)
      .pipe(
        pluck('entity'),
        catchError((error) => throwError(grpcErrorsHandler(error))),
      )
      .toPromise();
  }

  async deleteOne(
    data: IEntityOne<DeleteUserInput>,
  ): Promise<Partial<UserType>> {
    return await this.grpcService
      .deleteOne(data)
      .pipe(
        pluck('entity'),
        catchError((error) => throwError(grpcErrorsHandler(error))),
      )
      .toPromise();
  }

  async searchOne(
    data: IEntityOne<SearchUserInput>,
  ): Promise<Partial<UserType>> {
    return await this.grpcService
      .searchOne(data)
      .pipe(
        pluck('entity'),
        catchError((error) => throwError(grpcErrorsHandler(error))),
      )
      .toPromise();
  }

  async searchMany(
    data: IEntityMany<SearchUserInput>,
  ): Promise<Partial<UserType>[]> {
    return await this.grpcService
      .searchMany(data)
      .pipe(
        pluck('entities'),
        catchError((error) => throwError(grpcErrorsHandler(error))),
      )
      .toPromise();
  }
}
