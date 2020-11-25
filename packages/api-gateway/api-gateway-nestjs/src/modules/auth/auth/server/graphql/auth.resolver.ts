import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { authJoiSchema } from '@gmahechas/common-erp';

import { AuthGrpcService } from '@api-gateway-nestjs/modules/auth/auth/client/grpc/auth-grpc.service';
import { AuthSigninRequestInput } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.type';
import { JoiValidationPipe } from '@api-gateway-nestjs/utils/joi-validation.pipe';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  @UsePipes(new JoiValidationPipe(authJoiSchema.signin))
  signin(
    @Args('data') data: AuthSigninRequestInput,
  ): Observable<AuthSigninResponseType> {
    return this.authGrpcService.signin(data).pipe(
      map(({ successAuthUser }) => {
        console.log(successAuthUser);
        return { successAuthUser: false };
      }),
    );
  }
}
