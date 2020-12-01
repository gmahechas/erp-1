import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';

import {
  IAuthSigninRequest,
  IAuthSigninResponse,
  Password,
  GRPC_AUTH_SERVICE_NAME,
  authJoiSchema,
} from '@gmahechas/common-erp';
import { GrpcValidationPipe } from '@gmahechas/common-erp-nestjs';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod(GRPC_AUTH_SERVICE_NAME)
  async signin(
    @Payload(new GrpcValidationPipe(authJoiSchema.signin))
    data: IAuthSigninRequest,
  ): Promise<IAuthSigninResponse> {
    const { userName, userPassword } = data;
    const { entity } = await this.userMongodbService.searchOne({
      entity: { userName },
    });

    if (!entity) {
      throw new RpcException({
        code: 16,
        message: JSON.stringify({
          message: 'validation.invalid_credentials',
        }),
      });
    }

    const passwordsMatch = await Password.compare(
      userPassword,
      entity.userPassword,
    );

    if (!passwordsMatch) {
      throw new RpcException({
        code: 16,
        message: JSON.stringify({
          message: 'validation.invalid_credentials',
        }),
      });
    }

    return new Promise((resolve) =>
      resolve({
        id: entity.id,
        userName: entity.userName,
        personId: entity.personId,
        jwt: 'sjhjkshjks',
      }),
    );
  }
}
