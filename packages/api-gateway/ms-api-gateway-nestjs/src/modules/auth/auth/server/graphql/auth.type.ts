import { ObjectType, Field } from '@nestjs/graphql';

import { IAuthSigninRequest, IAuthSigninResponse } from '@gmahechas/common-erp';

@ObjectType()
export class AuthSigninRequestType implements IAuthSigninRequest {
  @Field() userName: string;
  @Field() userPassword: string;
}

@ObjectType()
export class AuthSigninResponseType implements IAuthSigninResponse {
  @Field() id: string;
  @Field() userName: string;
  @Field() personId: string;
  jwt: string;
}
