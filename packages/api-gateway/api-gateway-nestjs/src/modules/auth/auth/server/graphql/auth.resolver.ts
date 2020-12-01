import { Args, Query, Resolver } from '@nestjs/graphql';

import { Observable } from 'rxjs';

import { authJoiSchema } from '@gmahechas/common-erp';
import { GraphqlValidationPipe } from '@gmahechas/common-erp-nestjs';

import { AuthGrpcService } from '@api-gateway-nestjs/modules/auth/auth/client/grpc/auth-grpc.service';
import { AuthSigninRequestInput } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  signin(
    @Args('data', new GraphqlValidationPipe(authJoiSchema.signin))
    data: AuthSigninRequestInput,
  ): Observable<AuthSigninResponseType> {
    return this.authGrpcService.signin(data);
  }
}
