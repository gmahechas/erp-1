import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';

import {
  ICreateUserInput,
  IUpdateUserInput,
  IDeleteUserInput,
  ISearchUserInput,
  IEntityMany,
  IEntityOne,
  IUser,
  GRPC_USER_SERVICE_NAME,
  userJoiSchema,
} from '@gmahechas/common-erp';
import { GrpcValidationPipe } from '@gmahechas/common-erp-nestjs';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async createOne(
    @Payload(new GrpcValidationPipe(userJoiSchema.create))
    data: IEntityOne<ICreateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.createOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async updateOne(
    @Payload(new GrpcValidationPipe(userJoiSchema.update))
    data: IEntityOne<IUpdateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.updateOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async deleteOne(
    @Payload(new GrpcValidationPipe(userJoiSchema.delete))
    data: IEntityOne<IDeleteUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.deleteOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchOne(
    @Payload() data: IEntityOne<ISearchUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.searchOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchMany(
    @Payload() data: IEntityMany<ISearchUserInput>,
  ): Promise<IEntityMany<IUser>> {
    return await this.userMongodbService.searchMany(data);
  }
}
