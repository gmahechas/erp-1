import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import { authJoiSchema } from '@gmahechas/common-erp';
import { GraphqlValidationPipe } from '@gmahechas/common-erp-nestjs';

import { AuthGrpcService } from '@ms-0/modules/ms-1/auth/client/grpc/auth-grpc.service';
import { AuthSigninRequestInput } from '@ms-0/modules/ms-1/auth/server/graphql/auth.input';
import { AuthSigninResponseType } from '@ms-0/modules/ms-1/auth/server/graphql/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  async signin(
    @Args('data', new GraphqlValidationPipe(authJoiSchema.signin))
    data: AuthSigninRequestInput,
    @Context() context: any,
  ): Promise<AuthSigninResponseType> {
    const authSigninResponse = await this.authGrpcService.signin(data);
    context.req.session.auth = authSigninResponse;
    return authSigninResponse;
  }
}
