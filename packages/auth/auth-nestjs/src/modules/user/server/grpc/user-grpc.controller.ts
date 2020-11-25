import { Controller } from '@nestjs/common';
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
} from '@gmahechas/common-erp';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async createOne(
    data: IEntityOne<ICreateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.createOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async updateOne(
    data: IEntityOne<IUpdateUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.updateOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async deleteOne(
    data: IEntityOne<IDeleteUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.deleteOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchById(
    data: IEntityOne<ISearchUserInput>,
  ): Promise<IEntityOne<IUser>> {
    return await this.userMongodbService.searchById(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  async searchMany(
    data: IEntityMany<ISearchUserInput>,
  ): Promise<IEntityMany<IUser>> {
    return await this.userMongodbService.searchMany(data);
  }
}