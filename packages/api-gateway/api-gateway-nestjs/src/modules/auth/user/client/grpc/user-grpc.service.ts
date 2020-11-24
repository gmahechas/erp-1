import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  IEntityMany,
  IEntityOne,
  IEntityService,
  IUser,
  ICreateUserInput,
  ISearchUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_USER_SERVICE_NAME,
} from '@gmahechas/common-erp';

@Injectable()
export class UserGrpcService implements OnModuleInit {
  private grpcService: IEntityService<
    IUser,
    ICreateUserInput,
    IUpdateUserInput,
    IDeleteUserInput,
    ISearchUserInput
  >;

  constructor(
    @Inject(GRPC_AUTH_PACKAGE_NAME) private readonly grpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<
      IEntityService<
        IUser,
        ICreateUserInput,
        IUpdateUserInput,
        IDeleteUserInput,
        ISearchUserInput
      >
    >(GRPC_USER_SERVICE_NAME);
  }

  createOne(data: IEntityOne<ICreateUserInput>): Observable<IUser> {
    return this.grpcService.createOne(data).pipe(pluck('entity'));
  }

  updateOne(data: IEntityOne<IUpdateUserInput>): Observable<IUser> {
    return this.grpcService.updateOne(data).pipe(pluck('entity'));
  }

  deleteOne(data: IEntityOne<IDeleteUserInput>): Observable<IUser> {
    return this.grpcService.deleteOne(data).pipe(pluck('entity'));
  }

  searchById(data: IEntityOne<ISearchUserInput>): Observable<IUser> {
    return this.grpcService.searchById(data).pipe(pluck('entity'));
  }

  searchMany(data: IEntityMany<ISearchUserInput>): Observable<IUser[]> {
    return this.grpcService.searchMany(data).pipe(pluck('entities'));
  }
}
