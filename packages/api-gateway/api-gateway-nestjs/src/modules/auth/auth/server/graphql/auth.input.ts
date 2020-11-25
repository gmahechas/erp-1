import { Field, InputType } from '@nestjs/graphql';

import { IAuthSigninRequest } from '@gmahechas/common-erp';

@InputType()
export class AuthSigninRequestInput implements IAuthSigninRequest {
  @Field() userName: string;
  @Field() userPassword: string;
}
