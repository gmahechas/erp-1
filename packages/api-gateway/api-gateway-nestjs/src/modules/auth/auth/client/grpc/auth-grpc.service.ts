import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable } from 'rxjs';

import {
  ISigninRequest,
  ISigninResponse,
  GRPC_AUTH_PACKAGE_NAME,
  GRPC_AUTH_SERVICE_NAME,
} from '@gmahechas/common-erp';

export interface IAuthService {
  signin(data: ISigninRequest): Observable<ISigninResponse>;
}
@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private authService: IAuthService;

  constructor(@Inject(GRPC_AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<IAuthService>(
      GRPC_AUTH_SERVICE_NAME,
    );
  }

  signin(data: ISigninRequest): Observable<ISigninResponse> {
    return this.authService.signin(data);
  }
}
