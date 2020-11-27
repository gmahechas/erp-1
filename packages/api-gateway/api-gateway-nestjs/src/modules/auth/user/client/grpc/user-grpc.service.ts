import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable, throwError } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';

import {
  IEntityService,
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

  createOne(data: IEntityOne<CreateUserInput>): Observable<Partial<UserType>> {
    return this.grpcService.createOne(data).pipe(
      pluck('entity'),
      catchError((error) => throwError(grpcErrorsHandler(error))),
    );
  }

  updateOne(data: IEntityOne<UpdateUserInput>): Observable<Partial<UserType>> {
    return this.grpcService.updateOne(data).pipe(
      pluck('entity'),
      catchError((error) => throwError(grpcErrorsHandler(error))),
    );
  }

  deleteOne(data: IEntityOne<DeleteUserInput>): Observable<Partial<UserType>> {
    return this.grpcService.deleteOne(data).pipe(
      pluck('entity'),
      catchError((error) => throwError(grpcErrorsHandler(error))),
    );
  }

  searchOne(data: IEntityOne<SearchUserInput>): Observable<Partial<UserType>> {
    return this.grpcService.searchOne(data).pipe(
      pluck('entity'),
      catchError((error) => throwError(grpcErrorsHandler(error))),
    );
  }

  searchMany(
    data: IEntityMany<SearchUserInput>,
  ): Observable<Partial<UserType>[]> {
    return this.grpcService.searchMany(data).pipe(
      pluck('entities'),
      catchError((error) => throwError(grpcErrorsHandler(error))),
    );
  }
}
