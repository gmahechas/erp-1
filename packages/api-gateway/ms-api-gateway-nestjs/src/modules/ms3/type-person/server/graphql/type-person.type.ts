import { ObjectType, Field } from '@nestjs/graphql';

import { ITypePerson } from '@gmahechas/common-erp';

@ObjectType()
export class TypePersonType implements ITypePerson {
  @Field() id: string;
  @Field() typePersonDescription: string;
  @Field() typePersonCode: string;
}
