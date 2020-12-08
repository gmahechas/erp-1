import { ObjectType, Field } from '@nestjs/graphql';

import { IMenu } from '@gmahechas/common-erp';

@ObjectType()
export class MenuType implements IMenu {
  @Field() id: string;
  @Field() menuName: string;
  @Field() menuDescription: string;
  @Field() menuUri: string;
  @Field() menuOrder: number;
  @Field() menuIdParent: string;
}
