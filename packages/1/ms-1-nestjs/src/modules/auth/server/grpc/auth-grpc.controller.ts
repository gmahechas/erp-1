import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload, RpcException } from '@nestjs/microservices';

import {
  IAuthSigninRequest,
  IAuthSigninResponse,
  compareHash,
  GRPC_AUTH_SERVICE_NAME,
  authJoiSchema,
  getJwt,
} from '@gmahechas/common-erp';
import { GrpcValidationPipe } from '@gmahechas/common-erp-nestjs';

import { UserMongodbService } from '@ms-1/modules/user/client/mongodb/user-mongodb.service';

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

    const passwordsMatch = await compareHash(userPassword, entity.userPassword);

    if (!passwordsMatch) {
      throw new RpcException({
        code: 16,
        message: JSON.stringify({
          message: 'validation.invalid_credentials',
        }),
      });
    }

    const userJwt = getJwt(
      {
        id: entity.id,
        userName: entity.userName,
        personId: entity.personId,
      },
      'AnaLu',
    );

    return {
      id: entity.id,
      userName: entity.userName,
      personId: entity.personId,
      jwt: userJwt,
    };
  }
}
