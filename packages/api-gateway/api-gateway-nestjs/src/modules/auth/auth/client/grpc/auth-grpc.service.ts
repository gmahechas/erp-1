import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable } from 'rxjs';

import {
  IAuthService,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_AUTH_SERVICE_NAME,
} from '@gmahechas/common-erp';

import { AuthSigninRequestInput } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.type';

@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private authService: IAuthService;

  constructor(@Inject(GRPC_AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<IAuthService>(
      GRPC_AUTH_SERVICE_NAME,
    );
  }

  signin(data: AuthSigninRequestInput): Observable<AuthSigninResponseType> {
    return this.authService.signin(data);
  }
}
