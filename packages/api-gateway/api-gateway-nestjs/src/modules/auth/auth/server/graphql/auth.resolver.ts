import { Args, Query, Resolver } from '@nestjs/graphql';

import { AuthGrpcService } from '@api-gateway-nestjs/modules/auth/auth/client/grpc/auth-grpc.service';
import { SigninRequestInput } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  async signin(
    @Args('data', { type: () => SigninRequestInput }) data: SigninRequestInput,
  ) {
    return this.authGrpcService.signin(data);
  }
}
