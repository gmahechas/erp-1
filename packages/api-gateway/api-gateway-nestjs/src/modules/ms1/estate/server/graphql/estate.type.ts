import { ObjectType, Field } from '@nestjs/graphql';

import { IEstate } from '@gmahechas/common-erp';

@ObjectType()
export class EstateType implements IEstate {
  @Field() id: string;
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
}
