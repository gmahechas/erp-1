import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';

import {
  ISigninRequest,
  ISigninResponse,
  Password,
} from '@gmahechas/common-erp';

import { GRPC_AUTH_SERVICE_NAME } from '@auth/utils/constants';
import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_AUTH_SERVICE_NAME)
  async signin(data: ISigninRequest): Promise<ISigninResponse> {
    const { userName, userPassword } = data;
    const user = await this.userMongodbService.searchOneByUsername(userName);

    if (!user) {
      throw new RpcException({ code: 16, message: 'Invalid credentials' });
    }

    const passwordsMatch = await Password.compare(
      user.userPassword,
      userPassword,
    );

    if (!passwordsMatch) {
      throw new RpcException({ code: 16, message: 'Invalid credentials' });
    }

    return { successAuthUser: true };
  }
}
