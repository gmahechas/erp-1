import { ObjectType, Field } from '@nestjs/graphql';

import { IUser } from '@gmahechas/common-erp';

@ObjectType()
export class UserType implements IUser {
  @Field() id: string;
  @Field() userName: string;
  userPassword: string;
  @Field() personId: string;
}
