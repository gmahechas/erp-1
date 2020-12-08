import { ObjectType, Field } from '@nestjs/graphql';

import { ICity } from '@gmahechas/common-erp';

@ObjectType()
export class CityType implements ICity {
  @Field() id: string;
  @Field() cityName: string;
  @Field() cityCode: string;
  @Field() estateId: string;
}
