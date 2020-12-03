import { GrpcMethod, Payload } from '@nestjs/microservices';
import { JoiSchema, IEntityServicePromise, IEntityOne, IEntityMany } from '@gmahechas/common-erp';
import { GrpcValidationPipe } from '../pipes';

export function BaseGrpcController<A, B, C, D, E>(
  serviceName: string,
  schemaValidation: JoiSchema
): any {

  abstract class BaseGrpcControllerHost {
    constructor(
      private readonly entityService: IEntityServicePromise<A, B, C, D, E>
    ) { }

    @GrpcMethod(serviceName)
    async createOne(
      @Payload(new GrpcValidationPipe(schemaValidation.create))
      data: IEntityOne<B>,
    ): Promise<IEntityOne<A>> {
      return await this.entityService.createOne(data);
    }

    @GrpcMethod(serviceName)
    async updateOne(
      @Payload(new GrpcValidationPipe(schemaValidation.update))
      data: IEntityOne<C>,
    ): Promise<IEntityOne<A>> {
      return await this.entityService.updateOne(data);
    }

    @GrpcMethod(serviceName)
    async deleteOne(
      @Payload(new GrpcValidationPipe(schemaValidation.delete))
      data: IEntityOne<D>,
    ): Promise<IEntityOne<A>> {
      return await this.entityService.deleteOne(data);
    }

    @GrpcMethod(serviceName)
    async searchOne(
      @Payload() data: IEntityOne<E>,
    ): Promise<IEntityOne<A>> {
      return await this.entityService.searchOne(data);
    }

    @GrpcMethod(serviceName)
    async searchMany(
      @Payload() data: IEntityMany<E>,
    ): Promise<IEntityMany<A>> {
      return await this.entityService.searchMany(data);
    }

  }

  return BaseGrpcControllerHost
}