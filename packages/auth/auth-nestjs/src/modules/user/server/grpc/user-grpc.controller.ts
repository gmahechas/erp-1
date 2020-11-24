import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { IEntityMany, IEntityOne, IUser } from '@gmahechas/common-erp';

import { GRPC_USER_SERVICE_NAME } from '@auth/utils/constants';
import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  createOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    return this.userMongodbService.createOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  updateOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    return this.userMongodbService.updateOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  deleteOne(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    return this.userMongodbService.deleteOne(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  searchById(data: IEntityOne<IUser>): Promise<IEntityOne<IUser>> {
    return this.userMongodbService.searchById(data);
  }

  @GrpcMethod(GRPC_USER_SERVICE_NAME)
  searchMany(data: IEntityMany<IUser>): Promise<IEntityMany<IUser>> {
    return this.userMongodbService.searchMany(data);
  }
}
