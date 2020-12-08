import { ObjectType, Field } from '@nestjs/graphql';

import { IProfileMenu } from '@gmahechas/common-erp';

@ObjectType()
export class ProfileMenuType implements IProfileMenu {
  @Field() id: string;
  @Field() profileMenuStatus: boolean;
  @Field() menuId: string;
  @Field() profileId: string;
}
