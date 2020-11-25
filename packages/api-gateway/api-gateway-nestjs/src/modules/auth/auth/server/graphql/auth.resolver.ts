import { Args, Query, Resolver } from '@nestjs/graphql';

import { Observable } from 'rxjs';

import { AuthGrpcService } from '@api-gateway-nestjs/modules/auth/auth/client/grpc/auth-grpc.service';
import { AuthSigninRequestInput } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  signin(
    @Args('data') data: AuthSigninRequestInput,
  ): Observable<AuthSigninResponseType> {
    return this.authGrpcService.signin(data);
  }
}
