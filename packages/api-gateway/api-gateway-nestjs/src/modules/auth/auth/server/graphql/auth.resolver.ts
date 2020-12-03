import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    @Context() context: any,
  ): Observable<AuthSigninResponseType> {
    return this.authGrpcService.signin(data).pipe(
      tap((response) => {
        context.req.session.auth = response;
        return response;
      }),
    );
  }
}
