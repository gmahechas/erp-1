import { ObjectType, Field } from '@nestjs/graphql';

import { IUserProfile } from '@gmahechas/common-erp';

@ObjectType()
export class UserProfileType implements IUserProfile {
  @Field() id: string;
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
}
