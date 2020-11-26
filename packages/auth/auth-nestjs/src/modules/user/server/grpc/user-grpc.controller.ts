import { Controller, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

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
  @UsePipes(new GrpcValidationPipe(userJoiSchema.create))
  async createOne(
    data: IEntityOne<ICreateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.createOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  @UsePipes(new GrpcValidationPipe(userJoiSchema.update))
  async updateOne(
    data: IEntityOne<IUpdateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.updateOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  @UsePipes(new GrpcValidationPipe(userJoiSchema.delete))
  async deleteOne(
    data: IEntityOne<IDeleteUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.deleteOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchOne(
    data: IEntityOne<ISearchUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.searchOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchMany(
    data: IEntityMany<ISearchUserInput>,
  ): Promise<IEntityMany<IUser>> {
    return await this.userMongodbService.searchMany(data);
  }
}
