import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  IAuthService,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_AUTH_SERVICE_NAME,
  grpcErrorsHandler,
} from '@gmahechas/common-erp';

import { AuthSigninRequestInput } from '@ms-0/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@ms-0/modules/auth/auth/server/graphql/auth.type';

@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private authService: IAuthService;

  constructor(@Inject(GRPC_AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<IAuthService>(
      GRPC_AUTH_SERVICE_NAME,
    );
  }

  async signin(data: AuthSigninRequestInput): Promise<AuthSigninResponseType> {
    return await this.authService
      .signin(data)
      .pipe(catchError((error) => throwError(grpcErrorsHandler(error))))
      .toPromise();
  }
}
