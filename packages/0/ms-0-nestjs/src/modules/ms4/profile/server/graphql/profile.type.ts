import { ObjectType, Field } from '@nestjs/graphql';

import { IProfile } from '@gmahechas/common-erp';

@ObjectType()
export class ProfileType implements IProfile {
  @Field() id: string;
  @Field() profileName: string;
  @Field() profileDescription: string;
}
