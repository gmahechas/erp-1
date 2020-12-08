import { ObjectType, Field } from '@nestjs/graphql';

import { IAddress } from '@gmahechas/common-erp';

@ObjectType()
export class AddressType implements IAddress {
  @Field() id: string;
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() cityId: string;
}
