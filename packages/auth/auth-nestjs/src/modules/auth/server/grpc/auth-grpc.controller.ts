import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';

import {
  IAuthSigninRequest,
  IAuthSigninResponse,
  Password,
  GRPC_AUTH_SERVICE_NAME,
} from '@gmahechas/common-erp';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_AUTH_SERVICE_NAME)
  async signin(data: IAuthSigninRequest): Promise<IAuthSigninResponse> {
    const { userName, userPassword } = data;
    const { entity } = await this.userMongodbService.searchOne({
      entity: { userName },
    });

    if (!entity) {
      throw new RpcException({ code: 16, message: 'Invalid credentials' });
    }

    const passwordsMatch = await Password.compare(
      userPassword,
      entity.userPassword,
    );

    if (!passwordsMatch) {
      throw new RpcException({ code: 16, message: 'Invalid credentials' });
    }

    return new Promise((resolve) => resolve({ successAuthUser: true }));
  }
}
