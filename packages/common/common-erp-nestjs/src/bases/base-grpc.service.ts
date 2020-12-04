import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { grpcErrorsHandler, IEntityMany, IEntityOne, IEntityServiceObservable } from '@gmahechas/common-erp';

export function BaseGrpcService<A, B, C, D, E>(serviceName: string): any {

  abstract class BaseGrpcServiceHost implements OnModuleInit {

    private grpcService!: IEntityServiceObservable<A, B, C, D, E>;

    constructor(
      private readonly grpcClient: ClientGrpc
    ) { }

    onModuleInit() {
      this.grpcService = this.grpcClient.getService<
        IEntityServiceObservable<A, B, C, D, E>
        >(serviceName);
    }

    async createOne(
      data: IEntityOne<B>,
    ): Promise<IEntityOne<A>> {
      return await this.grpcService
        .createOne(data)
        .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
        .toPromise();
    }

    async updateOne(
      data: IEntityOne<C>,
    ): Promise<IEntityOne<A>> {
      return await this.grpcService
        .updateOne(data)
        .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
        .toPromise();
    }

    async deleteOne(
      data: IEntityOne<D>,
    ): Promise<IEntityOne<A>> {
      return await this.grpcService
        .deleteOne(data)
        .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
        .toPromise();
    }

    async searchOne(
      data: IEntityOne<E>,
    ): Promise<IEntityOne<A>> {
      return await this.grpcService
        .searchOne(data)
        .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
        .toPromise();
    }

    async searchMany(
      data: IEntityMany<E>,
    ): Promise<IEntityMany<A>> {
      return await this.grpcService
        .searchMany(data)
        .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
        .toPromise();
    }
  }

  return BaseGrpcServiceHost;
}